/* Static imports */

import { useState, useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdHealthAndSafety } from "react-icons/md";
import { colors } from "../../styles/frontend-conf";
import { useSession } from "next-auth/react";
import {server} from '../../server'
import global from "../../styles/global.module.css";
import dynamic from "next/dynamic";

/* Dynamic imports */

const FollowButton = dynamic(() =>
  import("/components/FollowButton/FollowButton")
);
const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);
const LazyLoad = dynamic(() => import("react-lazyload"));

/** 
  * @author Sergio García Navarro
  * @returns Follower component
  * @version 1.0
  * @description Follower component
*/

/**
 * This function is a follower component that receive props from page and displays them
 * in a follower card
 * @param props - props received from page.
 * @returns A follower card.
 */
export default function Followers(props) {
  const [user, setUser] = useState({});
  const [isShelter, setIsShelter] = useState(false);
  const [isVet, setIsVet] = useState(false);

  const { data: session } = useSession({});


  async function getFollowers() {
    const res = await fetch(
      `${server}/api/followers/${props?.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const follower = await res.json();

    setUser(follower);

    if (follower?.role.name === "veterinaria") setIsVet(true);
    else if (follower?.role.name === "protectora") setIsShelter(true);
  }

  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <>
      <div className={global.following}>
        <div className="follower__image">
          <FallbackImage
            src={user?.image}
            style={{ borderRadius: "50px" }}
            alt="Imagen de usuario"
            width={100}
            height={100}
          />
        </div>
        <div className="follower__info">
          <a
            className={global.link}
            href={`/profile/${user?.username}`}
            aria-label={`Ir a perfil de ${user?.username}`}
          >
            <strong>@{user?.username}</strong>
            {isShelter && <BsPatchCheckFill size={20} color={colors.primary} />}
            {isVet && <MdHealthAndSafety size={20} color={colors.primary} />}
          </a>
        </div>
        {user != {} && user != undefined && 
          <FollowButton
            idFrom={session?.user.id}
            usernameFrom={session?.user.username}
            idTo={user?._id}
            usernameTo={user?.username}
          />
        }
          

      </div>

      <style jsx>
        {`
          .follower__image {
            /*Box model*/

            width: 2rem;
            height: 2rem;
            margin-right: 0.5rem;
          }

          .follower__info {
            /*Box model*/

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  );
}
