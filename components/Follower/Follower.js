/* Static imports */

import { useState, useEffect } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdHealthAndSafety, MdPets } from "react-icons/md";
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
  const [isAdmin, setIsAdmin] = useState(false);
  const [isManager, setIsManager] = useState(false)
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
    else if (follower?.role.name === "administrador") setIsAdmin(true);
    else if (follower?.role.name === "gerente") setIsManager(true);
  }

  useEffect(() => {
    getFollowers();
  }, [props]);

  return (
    <>
      <div className={global.following}>
        <div className="follower__container">
          <div className="follower__image">
            <FallbackImage
              src={user?.image}
              style={{ borderRadius: "50px" }}
              alt="Imagen de usuario"
              width={200}
              height={200}
            />
          </div>
          <div className="follower__info">
            {session?.user.id != user?._id && 
              <a
                className={global.link3__bold}
                href={`/profile/${user?.username}`}
                aria-label={`Ir a perfil de ${user?.username}`}
              >
                <strong>@{user?.username}</strong>
                {isShelter && <MdPets size={18} color={colors.secondary} />}
                {isVet && <MdHealthAndSafety size={18} color={colors.secondary} />}
                {(isAdmin || isManager) && <BsPatchCheckFill size={18} color={colors.secondary} />}
              </a>}
              {session?.user.id === user?._id && 
              <a
                className={global.link3__bold}
                href={`/profile/myprofile`}
                aria-label={`Ir a tu perfil`}
              >
                <strong>@{user?.username}</strong>
                {isShelter && <MdPets size={18} color={colors.secondary} />}
                {isVet && <MdHealthAndSafety size={18} color={colors.secondary} />}
                {(isAdmin || isManager) && <BsPatchCheckFill size={18} color={colors.secondary} />}
              </a>}
          </div>
          {user && session?.user.id != user._id && 
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

          .follower__container{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 7vh;
            width: 100%;

          }

          .follower__image {
            /*Box model*/

            width: 3rem;
            height: 3rem;
            margin-right: auto;
          }

          .follower__info {

            
            /*Box model*/
                    
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-right: auto;

          }

          .follower__info a{
            /*Box model*/
            
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 0.5rem;
          }


        `}
      </style>
    </>
  );
}
