/*Static imports */

import { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { server } from "../../server";
import global from "../../styles/global.module.css";
import dynamic from "next/dynamic";

/*Dynamic imports*/

const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns Follow button component
 * @version 1.0
 * @description Follow button component
 */

/**
 * This function is a follow button component that receive props from page and displays them
 * in a follow button for following new users
 * @param props - props received from page.
 * @returns A follow button.
 */
export default function FollowButton(props) {
  const [isFollowedByMe, setIsFollowedByMe] = useState(false);

  async function getUser() {
    const res = await fetch(`${server}/api/users/${props?.usernameFrom}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data) setIsFollowedByMe(data?.following.includes(props?.idTo));
  }

  const followUser = async () => {
    if (isFollowedByMe === false) {
      await fetch(`${server}/api/follow`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          idFrom: props?.idFrom,
          usernameFrom: props?.usernameFrom,
          usernameTo: props?.usernameTo,
          idTo: props?.idTo,
        }),
      });

      setIsFollowedByMe(true);
    }

    if (isFollowedByMe === true) {
      await fetch(`${server}/api/unfollow`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          idFrom: props?.idFrom,
          usernameFrom: props?.usernameFrom,
          usernameTo: props?.usernameTo,
          idTo: props?.idTo,
        }),
      });

      setIsFollowedByMe(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [props]);

  return (
    <>
      {isFollowedByMe ? (
        <button className={global.buttonFollowed} onClick={() => followUser()}>
          Seguido
        </button>
      ) : (
        <button className={global.buttonTertiaryNoShadow} onClick={() => followUser()}>
          Seguir <AiOutlineCheck />
        </button>
      )}
    </>
  );
}
