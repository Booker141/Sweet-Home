import { MongoClient, ObjectId } from "mongodb";

describe("insert documents in all collections", () => {

  beforeAll(async () => {

    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = await connection.db(process.env.MONGODB_DATABASE);
  });

  afterAll(async () => {
    await connection.close();
  });

  test("should insert a doc into user collection", async () => {
    const users = db.collection("users");

    const userExample = {
      _id: new ObjectId(),
      email: "test@gmail.com",
      firstname: "John",
      lastname: "test",
      username: "test1234",
      password: "aujhsfhauoeufghwasefh",
      phone: "654321890",
      gender: "male",
      birthdate: new Date("December 17, 1995 03:24:00"),
      image: "/userPhotos/default.png",
      status: {
        _id: ObjectId("63b954c69f24e55518d5bde1"),
        name: "activo",
      },
      role: {
        _id: ObjectId("63131f6d85be4a20dbb1fae6"),
        name: "usuario",
      },
      createdAt: new Date(),
      biography: "",
      followers: [],
      following: [],
      isCaretaker: false,
      pets: [],
      saves: [],
      likes: [],
      complaints: [],
      accountId: null,
    };

    await users.insertOne(userExample);

    const insertedUser = await users.findOne({
      email: "test@gmail.com",
    });

    expect(insertedUser).toEqual(userExample);
  });

  test("should insert a doc into userStatus collection", async () => {
    const userStatus = db.collection("userStatus");

    const userStatusExample = {
      _id: new ObjectId(),
      name: "desactivado",
    };
    await userStatus.insertOne(userStatusExample);

    const insertedUserStatus = await userStatus.findOne({
      name: "desactivado",
    });
    expect(insertedUserStatus).toBe(userStatusExample);
  });

  test("should insert a doc into userRole collection", async () => {
    const userRole = db.collection("userRole");

    const userRoleExample = {
      _id: new ObjectId(),
      name: "informático",
    };
    await userRole.insertOne(userRoleExample);

    const insertedUserRole = await userRole.findOne({
      name: "informático",
    });
    expect(insertedUserRole).toBe(userRoleExample);
  });

  test("should insert a doc into typeNotification collection", async () => {
    const typeNotification = db.collection("typeNotification");

    const typeNotificationExample = {
      _id: new ObjectId(),
      name: "visto",
    };
    await typeNotification.insertOne(typeNotificationExample);

    const insertedTypeNotification = await typeNotification.findOne({
      name: "visto",
    });
    expect(insertedTypeNotification).toBe(typeNotificationExample);
  });

  test("should insert a doc into typeAttendance collection", async () => {
    const typeAttendance = db.collection("typeAttendance");

    const typeAttendanceExample = {
      _id: new ObjectId(),
      name: "Gimnasia",
      description: "La actividad física es muy importante...",
      threads: [],
      adminId: new ObjectId(),
    };

    await typeAttendance.insertOne(typeAttendanceExample);

    const insertedTypeAttendance = await typeAttendance.findOne({
      name: "Gimnasia",
    });
    expect(insertedTypeAttendance).toBe(typeAttendanceExample);
  });

  test("should insert a doc into threads collection", async () => {
    const thread = db.collection("threads");

    const threadExample = {
      _id: new ObjectId(),
      title: "Gimnasia en 10 pasos",
      typeAttendanceId: new ObjectId(),
      createdAt: new Date(),
      attendances: [],
      userId: new ObjectId(),
      username: "test1234",
    };

    await thread.insertOne(threadExample);

    const insertedThread = await thread.findOne({
      title: "Gimnasia en 10 pasos",
    });
    expect(insertedThread).toBe(threadExample);
  });

  test("should insert a doc into questions collection", async () => {
    const question = db.collection("questions");

    const questionExample = {
      _id: new ObjectId(),
      title: "¿Pregunta frecuente?",
      answer: "Sí, pero..",
      adminId: new ObjectId(),
    };
    await question.insertOne(questionExample);

    const insertedQuestion = await question.findOne({
      title: "¿Pregunta frecuente?",
    });
    expect(insertedQuestion).toBe(questionExample);
  });

  test("should insert a doc into posts collection", async () => {
    const post = db.collection("posts");

    const id = new ObjectId();

    const postExample = {
      _id: id,
      location: "Jerez",
      description: "Me encantan mis gatos...",
      comments: [],
      likes: [],
      saves: [],
      userId: new ObjectId(),
      username: "test1234",
      createdAt: new Date(),
      image: "/postPhotos/1.jpg",
    };

    await post.insertOne(postExample);

    const insertedPost = await post.findOne({
      _id: id,
    });
    expect(insertedPost).toBe(postExample);
  });

  test("should insert a doc into pets collection", async () => {
    const pet = db.collection("pets");

    const id = new ObjectId();

    const petExample = {
      _id: id,
      animal: "gato",
      breed: "Egipcio",
      name: "Misu",
      weight: 32.4,
      image: "/petPhoto/2.png",
      ownerId: new ObjectId(),
      ownerUsername: "test1234",
      birthdate: new Date("December 17, 1995 03:24:00"),
    };

    await pet.insertOne(petExample);

    const insertedPet = await pet.findOne({
      _id: id,
    });
    expect(insertedPet).toBe(petExample);
  });

  test("should insert a doc into notifications collection", async () => {
    const notification = db.collection("notifications");

    const id = new ObjectId();
    const notificationExample = {
      _id: id,
      userIdFrom: new ObjectId(),
      userIdTo: new ObjectId(),
      typeNotificationId: new ObjectId(),
      description: "notificación",
    };
    await notification.insertOne(notificationExample);

    const insertedNotification = await notification.findOne({
      _id: id,
    });
    expect(insertedNotification).toBe(notificationExample);
  });

  test("should insert a doc into news collection", async () => {
    const newCollection = db.collection("news");

    const id = new ObjectId();

    const newExample = {
      _id: id,
      title: "Carlota ha sido entrevistada",
      date: new Date(),
      introduction: "Introducción",
      body: "Cuerpo",
      conclusion: "Conclusión",
      author: "Pablo López",
      index: 4,
      adminId: new ObjectId(),
    };

    await newCollection.insertOne(newExample);

    const insertedNew = await newCollection.findOne({
      _id: id,
    });
    expect(insertedNew).toBe(newExample);
  });

  test("should insert a doc into messages collection", async () => {
    const message = db.collection("messages");

    const id = new ObjectId();

    const messageExample = {
      _id: id,
      chatId: new ObjectId(),
      description: "one message",
      createdAt: new Date(),
    };
    await message.insertOne(messageExample);

    const insertedMessage = await message.findOne({
      _id: id,
    });
    expect(insertedMessage).toBe(messageExample);
  });

  test("should insert a doc into complaints collection", async () => {
    const complaint = db.collection("complaints");

    const id = new ObjectId();

    const complaintExample = {
      _id: id,
      description: "Está insultando",
      adminId: null,
      createdAt: new Date(),
      isApproved: false,
      isChecked: false,
      userIdFrom: new ObjectId(),
      userIdTo: new ObjectId(),
      usernameFrom: "test1234",
      usernameTo: "test5678",
    };

    await complaint.insertOne(complaintExample);

    const insertedComplaint = await complaint.findOne({
      _id: id,
    });
    expect(insertedComplaint).toBe(complaintExample);
  });

  test("should insert a doc into comments collection", async () => {
    const comment = db.collection("comments");

    const id = new ObjectId();

    const commentExample = {
      _id: id,
      description: "Comentario 2",
      username: "test1234",
      userId: new ObjectId(),
      postId: new ObjectId(),
    };
    await comment.insertOne(commentExample);

    const insertedComment = await comment.findOne({
      _id: id,
    });
    expect(insertedComment).toBe(commentExample);
  });

  test("should insert a doc into chats collection", async () => {
    const chat = db.collection("chats");

    const id = new ObjectId();

    const chatExample = {
      _id: id,
      sender: "Carlota",
      receiver: "Marta",
      messages: [],
    };
    await chat.insertOne(chatExample);

    const insertedChat = await chat.findOne({
      _id: id,
    });
    expect(insertedChat).toBe(chatExample);
  });

  test("should insert a doc into attendances collection", async () => {
    const attendance = db.collection("attendances");

    const id = new ObjectId();

    const attendanceExample = {
      _id: id,
      location: "Cádiz",
      description: "Me encantan mis gatos",
      animal: "perro",
      image: "/postPhotos",
      userId: new ObjectId(),
      breed: "bulldog",
      comments: [],
      username: "test1234",
      threadId: new ObjectId(),
      createdAt: new Date(),
    };

    await attendance.insertOne(attendanceExample);

    const insertedAttendance = await attendance.findOne({
      _id: id,
    });
    expect(insertedAttendance).toBe(attendanceExample);
  });

  test("should insert a doc into accounts collection", async () => {
    const account = db.collection("accounts");

    const id = new ObjectId();

    const accountExample = {
      _id: id,
      provider: "credentials",
      type: "credentials",
      access_token: "asdasdaasd23",
      expires_at: new Date.getTime(),
      scope: "user.read",
      token_type: "Bearer",
      refresh_token: "asd6q7e7asd",
      providerAccountId: null,
      email: "test@email.com",
      firstname: "test",
      lastname: "pérez prueba",
      image: "/userPhotos/default.png",
      createdAt: new Date(),
      userId: new ObjectId(),
    };

    await account.insertOne(accountExample);

    const insertedAccount = await account.findOne({
      _id: id,
    });
    expect(insertedAccount).toBe(accountExample);
  });
});

describe("update inserted documents in all collections", () => {

  beforeAll(async () => {
    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = await connection.db(process.env.MONGODB_DATABASE);
  });

  afterAll(async () => {
    await connection.close();
  });

  test("should update a doc into collection", async () => {
    const users = db.collection("users");

    const mockUser = {
      _id: "some-user-id",
      name: "John",
    };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({
      _id: "some-user-id",
    });
    expect(insertedUser).toBe(mockUser);
  });
});

describe("delete", () => {

  beforeAll(async () => {
    const connection = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = await connection.db(process.env.MONGODB_DATABASE);
  });

  afterAll(async () => {
    await connection.close();
  });

  test("should delete a doc into collection", async () => {
    const users = db.collection("users");

    const mockUser = {
      _id: "some-user-id",
      name: "John",
    };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({
      _id: "some-user-id",
    });
    expect(insertedUser).toBe(mockUser);
  });
});
