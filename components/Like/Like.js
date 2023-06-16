/* Static imports */

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { colors } from "../../styles/frontend-conf";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { server } from "../../server";
import global from "../../styles/global.module.css";

/** 
  * @author Sergio García Navarro
  * @returns Like component
  * @version 1.0
  * @description Like component
*/

/**
 * This function is a like component that receive props from post and displays them
 * in a like card which shows number of likes and a heart like button
 * @param props - props received from page.
 * @returns A like card.
 */
export default function Like(props) {
  const { data: session } = useSession();
  const [likes, setLikes] = useState(props?.likes);
  const [user, setUser] = useState({});

  const [isLikedByMe, setIsLikedByMe] = useState(false);

  const fetchLikes = async () => {
    const res = await fetch(`${server}/api/likes/${props?.postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setLikes(data?.likes);
  };

  async function getUser() {
    const res = await fetch(`${server}/api/users/${session?.user.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const user = await res.json();

    setUser(user);
    setIsLikedByMe(props?.likes?.includes(user?._id));
  }

  useEffect(() => {
    getUser();
  }, []);

  const Like = async () => {
    if (isLikedByMe === false) {
      await fetch(`${server}/api/likes`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          postId: props?.postId,
          userId: user?._id,
          username: user?.username,
        }),
      });

      setIsLikedByMe(true);
    } else {
      await fetch(`${server}/api/dislikes`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({ postId: props?.postId, userId: user?._id }),
      });

      setIsLikedByMe(false);
    }

    fetchLikes();
  };

  return (
    <>
      <div className="like">
        <p className={global.text2}>{likes?.length}</p>
        <button className="like--status" onClick={() => Like()}>
          {isLikedByMe && (
            <HiHeart
              size={20}
              color={colors.secondary}
              styles={{ fontWeight: "bold" }}
            />
          )}
          {!isLikedByMe && (
            <HiOutlineHeart
              size={20}
              color={colors.secondary}
              styles={{ fontWeight: "bold" }}
            />
          )}
        </button>
        <p className={global.text2}>Me gusta</p>
      </div>

      <style jsx>
        {`
          .like {
            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.2rem;
          }
          .like--status {
            /*Box model*/

            display: flex;
            align-items: center;

            /*Misc*/

            cursor: pointer;
          }

          .close__modal {
            /*Box model*/

            display: flex;
            flex-direction: row;
            align-self: flex-end;
            margin-right: 2rem;

            /*Visuals*/

            border: none;
            background: transparent;
            cursor: pointer;
          }

          a {
            /*Misc*/

            cursor: pointer;
          }

          button {
            /*Box model*/

            background: none;
            border: none;
            outline: none;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
