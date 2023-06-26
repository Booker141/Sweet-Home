/* Static imports*/

import { useState, useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdHealthAndSafety } from "react-icons/md";
import { colors } from "../../styles/frontend-conf";
import { useSession } from "next-auth/react";
import { server } from "../../server";
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
  * @returns Following component
  * @version 1.0
  * @description Following component
*/

/**
 * This function is a following component that receive props from page and displays them
 * in a following card
 * @param props - props received from page.
 * @returns A following card.
 */
export default function Following(props) {
  const [user, setUser] = useState({});
  const [isShelter, setIsShelter] = useState(false);
  const [isVet, setIsVet] = useState(false);


  const { data: session } = useSession({});


  async function getFollowing() {
    const res = await fetch(`${server}/api/usersById/${props.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const following = await res.json();

    setUser(following);

    if (following?.role.name === "veterinaria") setIsVet(true);
    else if (following?.role.name === "protectora") setIsShelter(true);
  }

  useEffect(() => {
    getFollowing();
  }, []);

  return (
    <>
      <div key={props.id} className={global.following}>
        <div className="following__container">
          <div className="following__image">
            <FallbackImage
              src={user?.image}
              style={{ borderRadius: "50px" }}
              alt="Imagen de usuario"
              width={100}
              height={100}
            />
          </div>
          <div className="following__info">
          {session?.user.id != user?._id && 
                <a
                  className={global.link3__bold}
                  href={`/profile/${user?.username}`}
                  aria-label={`Ir a perfil de ${user?.username}`}
                >
                  <strong>@{user?.username}</strong>
                  {isShelter && <BsPatchCheckFill size={20} color={colors.secondary} />}
                  {isVet && <MdHealthAndSafety size={20} color={colors.secondary} />}
                </a>}
                {session?.user.id === user?._id && 
                <a
                  className={global.link3__bold}
                  href={`/profile/myprofile`}
                  aria-label={`Ir a tu perfil`}
                >
                  <strong>@{user?.username}</strong>
                  {isShelter && <BsPatchCheckFill size={20} color={colors.secondary} />}
                  {isVet && <MdHealthAndSafety size={20} color={colors.secondary} />}
                </a>}
          </div>
          {user && session?.user.id != user?._id && 
            <FollowButton
              idFrom={session?.user.id}
              usernameFrom={session?.user.username}
              idTo={user._id}
              usernameTo={user.username}
            />
          }
        </div>
      </div>
      <style jsx>
        {`

        .following__container{
          /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 7vh;
            width: 100%;
        }
        .following__image {
            /*Box model*/

            width: 2rem;
            height: 2rem;
            margin-right: auto;
          }

          .following__info {

            
            /*Box model*/
                    
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-right: auto;

          }

          .following__info a{
            /*Box model*/
            
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

        `}
      </style>
    </>
  );
}
