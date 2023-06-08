import clientPromise from "../lib/MongoDB";

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "s-maxage=10");

  const client = await clientPromise;
  const db = await client.db();

  const users = await db.collection("users").find({}).limit(50).toArray();
  const posts = await db.collection("posts").find({}).toArray();
  const comments = await db.collection("comments").find({}).toArray();
  const complaints = await db.collection("complaints").find({}).toArray();
  const notifications = await db.collection("notifications").find({}).toArray();
  const messages = await db.collection("messages").find({}).toArray();
  const threads = await db.collection("threads").find({}).toArray();
  const pets = await db.collection("pets").find({}).toArray();
  const attendances = await db.collection("attendances").find({}).toArray();
  const typeAttendances = await db
    .collection("typeAttendance")
    .find({})
    .toArray();
  const news = await db.collection("news").find({}).toArray();
  const reports = await db.collection("reports").find({}).toArray();

  const mostPopularUsers = await db
    .collection("users")
    .aggregate([
      {
        $project: {
          _id: 1,
          followersCount: { $size: "$followers" },
          username: "$username",
        },
      },
      {
        $sort: { followersCount: -1 },
      },
      {
        $limit: 5,
      },
    ])
    .toArray();

  // Calculate the number of posts per day

  const numberPostsPerDay = await db
    .collection("posts")
    .aggregate([
      {
        $group: {
          _id: {
            $dateToString: {
              format: "%Y-%m-%d",
              date: "$createdAt",
            },
          },
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ])
    .toArray();

  // Format date as "dd-mm-YY"

  const formattedPosts = numberPostsPerDay.map((numberPostPerDay) => ({
    date: formatDate(numberPostPerDay._id),
    count: numberPostPerDay.count,
  }));

  // Calculate the number of posts per user

  const numberPostsPerUser = await db
    .collection("users")
    .aggregate([
      { $unwind: "$posts" },
      {
        $group: {
          _id: { userId: "$_id", username: "$username" },
          postCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          userId: "$_id.userId",
          username: "$_id.username",
          postCount: 1,
        },
      },
    ])
    .toArray();

  // Calculate new users per weekday

  const today = new Date();
  const startWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay()
  );
  const endWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() + 6
  );

  const numberUsersPerDay = await db
    .collection("users")
    .aggregate([
      { $match: { createdAt: { $gte: startWeek, $lte: endWeek } } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ])
    .toArray();

  const formattedUsers = numberUsersPerDay.map((numberUserPerDay) => ({
    date: formatDate(numberUserPerDay._id),
    count: numberUserPerDay.count,
  }));

  //Format date as "dd-mm-YY"

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${day}-${month}-${year}`;
  }

  // Calculate the average number of posts per day

  const aggregationResult = await db
    .collection("posts")
    .aggregate([
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
          },
          count: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: null,
          totalPosts: { $sum: "$count" },
          dates: { $sum: 1 },
        },
      },
    ])
    .toArray();

  // Extract the average from the aggregation result

  const { totalPosts, dates } = aggregationResult[0];
  const averagePostsPerDay = totalPosts / dates;

  // Calculate the average number of comments per post

  const aggregationComments = await db
    .collection("posts")
    .aggregate([
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "postId",
          as: "comments",
        },
      },
      {
        $project: {
          _id: 1,
          commentCount: { $size: "$comments" },
        },
      },
      {
        $group: {
          _id: null,
          totalComments: { $sum: "$commentCount" },
          numberPosts: { $sum: 1 },
        },
      },
    ])
    .toArray();

  const { totalComments, numberPosts } = aggregationComments[0];
  const averageCommentsPerPost = totalComments / numberPosts;

  // Calculate the average number of complaints per user

  const averageComplaintsPerUser = await db
    .collection("users")
    .aggregate([
      { $project: { _id: 1, complaintCount: { $size: "$complaints" } } },
      {
        $group: {
          _id: null,
          totalComplaints: { $sum: "$complaintCount" },
          userCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          averageComplaintsPerUser: {
            $divide: ["$totalComplaints", "$userCount"],
          },
        },
      },
    ])
    .toArray();

  // Calculate the average number of attendances per thread
  const averageAttendancesPerThread = await db
    .collection("threads")
    .aggregate([
      { $project: { _id: 1, attendanceCount: { $size: "$attendances" } } },
      {
        $group: {
          _id: null,
          totalAttendances: { $sum: "$attendanceCount" },
          threadCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          averageAttendancesPerThread: {
            $divide: ["$totalAttendances", "$threadCount"],
          },
        },
      },
    ])
    .toArray();

  // Calculate the average of likes per post
  const averageLikesPerPost = await db
    .collection("posts")
    .aggregate([
      { $project: { _id: 1, likeCount: { $size: "$likes" } } },
      {
        $group: {
          _id: null,
          totalLikes: { $sum: "$likeCount" },
          postCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          averageLikesPerPost: { $divide: ["$totalLikes", "$postCount"] },
        },
      },
    ])
    .toArray();

  // Calculate the average of pets per user

  const averagePetsPerUser = await db
    .collection("users")
    .aggregate([
      { $project: { _id: 1, petCount: { $size: "$pets" } } },
      {
        $group: {
          _id: null,
          totalPets: { $sum: "$petCount" },
          userCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          averagePetsPerUser: { $divide: ["$totalPets", "$userCount"] },
        },
      },
    ])
    .toArray();

  // Calculate the average of saves per user

  const averageSavesPerUser = await db
    .collection("users")
    .aggregate([
      { $project: { _id: 1, saveCount: { $size: "$saves" } } },
      {
        $group: {
          _id: null,
          totalSaves: { $sum: "$saveCount" },
          userCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          averageSavesPerUser: { $divide: ["$totalSaves", "$userCount"] },
        },
      },
    ])
    .toArray();

  // Calculate the average of followers per user

  const averageFollowersPerUser = await db
    .collection("users")
    .aggregate([
      { $project: { _id: 1, followerCount: { $size: "$followers" } } },
      {
        $group: {
          _id: null,
          totalFollowers: { $sum: "$followerCount" },
          userCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          averageFollowersPerUser: {
            $divide: ["$totalFollowers", "$userCount"],
          },
        },
      },
    ])
    .toArray();

  // Calculate the average of reports per user

  const averageReportsPerUser = await db
    .collection("reports")
    .aggregate([
      { $group: { _id: "$userId", reportCount: { $sum: 1 } } },
      {
        $group: {
          _id: null,
          totalReports: { $sum: "$reportCount" },
          userIdCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          averageReportsPerUserId: {
            $divide: ["$totalReports", "$userIdCount"],
          },
        },
      },
    ])
    .toArray();

  // Calculate the average number of threads per typeAttendance
  const aggregationThreads = await db
    .collection("threads")
    .aggregate([
      {
        $group: {
          _id: "$typeAttendance",
          count: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: null,
          totalThreads: { $sum: "$count" },
          numberTypes: { $sum: 1 },
        },
      },
    ])
    .toArray();

  // Extract the average from the aggregation result

  const { totalThreads, numberTypes } = aggregationThreads[0];
  const averageThreadsPerTypeAttendance = totalThreads / numberTypes;

  const userMostPosts = await db
    .collection("users")
    .aggregate([
      { $project: { _id: 1, postCount: { $size: "$posts" } } },
      { $sort: { postCount: -1 } },
      { $limit: 1 },
    ])
    .toArray();

  let statistics = {
    mostPopularUsers: mostPopularUsers,
    typeAttendances: typeAttendances,
    users: users.length,
    news: news.length,
    notifications: notifications.length,
    messages: messages.length,
    comments: comments.length,
    complaints: complaints.length,
    threads: threads.length,
    pets: pets.length,
    attendances: attendances.length,
    reports: reports.length,
    posts: posts.length,
    userMostPosts: userMostPosts[0],
    numberPostsPerUser: numberPostsPerUser,
    numberPostsPerDay: formattedPosts,
    numberUsersPerDay: formattedUsers,
    averagePostsPerDay: parseInt(averagePostsPerDay),
    averageCommentsPerPost: parseInt(averageCommentsPerPost),
    averageThreadsPerTypeAttendance: parseInt(averageThreadsPerTypeAttendance),
    averageComplaintsPerUser: parseInt(
      averageComplaintsPerUser[0].averageComplaintsPerUser
    ),
    averageAttendancesPerThread: parseInt(
      averageAttendancesPerThread[0].averageAttendancesPerThread
    ),
    averageLikesPerPost: parseInt(averageLikesPerPost[0].averageLikesPerPost),
    averagePetsPerUser: parseInt(averagePetsPerUser[0].averagePetsPerUser),
    averageSavesPerUser: parseInt(averageSavesPerUser[0].averageSavesPerUser),
    averageFollowersPerUser: parseInt(
      averageFollowersPerUser[0].averageFollowersPerUser
    ),
    averageReportsPerUser: parseInt(
      averageReportsPerUser[0].averageReportsPerUserId
    ),
  };

  console.log(statistics);

  if (req.method === "GET") {
    res.status(200).json(statistics);
  }
}
