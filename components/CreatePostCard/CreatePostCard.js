/* Static imports */

import { colors, fonts } from "../../styles/frontend-conf";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { server } from "../../server";
import { toast } from "react-toastify";
import global from "../../styles/global.module.css";
import dynamic from "next/dynamic";

/* Dynamic imports */

const InputEmoji = dynamic(() => import("react-input-emoji"));
const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);
const LazyLoad = dynamic(() => import("react-lazyload"));

/** 
  * @author Sergio García Navarro
  * @returns Create post card component
  * @version 1.0
  * @description Create post card component
*/

/**
 * This function is a create post card component to make posting easily
 * @returns A create post card.
 */
export default function CreatePostCard() {
  const { data: session } = useSession();

  const [user, setUser] = useState({});
  const [description, setDescription] = useState("");

  const Router = useRouter();

  const getUser = async () => {
    const res = await fetch(`${server}/api/users/${session?.user.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setUser(data);
  };

  const createPost = async () => {
    if (description.trim() === "") {
      toast.error("Debe escribir un mensaje para publicar", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    const res = await fetch(`${server}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session?.user.id,
        location: "",
        description: description,
        username: session?.user.username,
        image: "",
        type: "",
      }),
    }).catch((err) => console.log(err));

    const data = await res.json();

    if (data.error) {
      toast.success("Introduzca un mensaje", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Se ha publicado correctamente", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });


        Router.reload();

    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="createPost__card">
        <div className="user__image">
          <div className="profile__image">
            <FallbackImage
              src={user?.image}
              style={{ borderRadius: "50px" }}
              alt="Imagen de usuario"
              width={60}
              height={60}
            />
          </div>
        </div>

        <div className="post__description">
          <div className="description__input">
            <InputEmoji
              title="Crear una publicación"
              type="text"
              name="description"
              id="post"
              value={description}
              onChange={setDescription}
              cleanOnEnter
              onEnter={createPost}
              placeholder={`¿Qué está pasando, ${user?.username}? 😄`}
              fontFamily={`${fonts.default}`}
              borderColor={`${colors.primary}`}
            />
          </div>
          <button onClick={createPost} className={global.buttonPrimary}>
            Publicar
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .user__image {
            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 0.2rem;

            /*Visuals*/

            border-radius: 70px;
            border-image: linear-gradient(45 deg, #f0810f, #f9a603) 30;
          }

          .profile__image {
            /*Box model*/

            display: flex;
            z-index: 1000;
            align-items: center;
            margin-left: 1rem;

            /*Visuals*/

            border-radius: 70px;
          }

          .post__description {
            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 1rem;
            margin-top: 1rem;
            margin-right: 1rem;
            padding: 1.3rem;

            /*Visuals*/

            border-radius: 20px;
            background: #fafafa;
            box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
          }

          .description__input {
            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-right: 1rem;
            width: 53vw;

            /*Text*/

            font-family: ${fonts.default};
            font-size: 1rem;
            font-weight: 400;
            color: ${colors.secondary};
          }

          .description__input:after {
            /*Box model*/

            color: ${colors.secondary};
          }

          .createPost__card {
            /*Box model*/

            display: flex;

            flex-direction: row;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            width: 70vw;
            padding: 1rem;

            /*Visuals*/

            background: linear-gradient(
              45deg,
              rgba(240, 129, 15, 1) 35%,
              rgba(249, 166, 3, 1) 100%
            );
            border-radius: 20px;
          }
          .text {
            /*Box model*/

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .buttonTertiary {
            /*Box model*/

            display: flex;
            float: right;
          }

          .user__image a {
            /*Visuals*/

            text-decoration: none;
            width: 50px;
            height: 50px;
          }

          a {
            /*Visuals*/

            text-decoration: none;
          }

          button {
            /*Box model*/

            margin-right: 1rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
}
