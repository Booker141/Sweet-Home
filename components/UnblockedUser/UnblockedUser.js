/* Static imports */

import { useState } from "react";
import { useRouter } from "next/router";
import { server } from "/server";
import { colors } from "/styles/frontend-conf.js";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdHealthAndSafety, MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import global from "/styles/global.module.css";
import dynamic from "next/dynamic";

/*Dynamic imports*/

const Modal = dynamic(() => import("/components/Modal/Modal"));
const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);
const LazyLoad = dynamic(() => import("react-lazyload"));

/** 
  * @author Sergio García Navarro
  * @returns Unblocked user component
  * @version 1.0
  * @description Unblocked user component
*/

/**
 * This function is an unblocked user component that receive props from page and displays them
 * in an user card
 * @param props - props received from page.
 * @returns An unblocked user card.
 */
export default function BlockedUser(props) {
  const [user, setUser] = useState({});
  const [user2, setUser2] = useState({});
  const [isShelter, setIsShelter] = useState(
    props?.role.name === "protectora" ? true : false
  );
  const [isVet, setIsVet] = useState(
    props?.role.name === "veterinaria" ? true : false
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const Router = useRouter();

  const checkActive = async () => {
    await fetch(`${server}/api/unblockedUsers`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: props?.id,
      }),
    });

    toast.success(`Se ha activado al usuario`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setIsModalVisible(false);
    setTimeout(() => {
      Router.reload();
    }, 5000);
  };

  return (
    <>
      <div className={global.complaint}>
        <div className="blocked__user">
          <FallbackImage
            src={props?.image}
            alt="Imagen de usuario"
            style={{ borderRadius: "50px" }}
            width={40}
            height={40}
          />
          <a
            className={global.text__bold}
            href={`/profile/${props?.username}`}
            aria-label={`Ir a perfil de ${props?.username}`}
          >
            {props?.username}
            {isShelter && (
              <BsPatchCheckFill size={20} color={colors.secondary} />
            )}
            {isVet && <MdHealthAndSafety size={20} color={colors.secondary} />}
          </a>
        </div>
        <hr className={global.white__line}></hr>
        <div className="blocked__body">
          <p className={global.text}>Este usuario ha sido bloqueado</p>
        </div>
        <button
          className={global.buttonPrimary}
          onClick={() => setIsModalVisible(true)}
        >
          Activar
        </button>
      </div>
      {isModalVisible && (
        <Modal>
          <button
            className="close__modal"
            onClick={() => setIsModalVisible(false)}
          >
            <MdClose size={30} color={`${colors.secondary}`} />
          </button>
          <h2 className={global.title3}>Activar al usuario</h2>
          <p className={global.text2}>
            Esta acción no es irreversible, podrá bloquear de nuevo al usuario
            si es necesario
          </p>
          <p className={global.text2}>
            ¿Estás seguro de bloquear a este usuario?
          </p>
          <div className="buttons">
            <button
              className={global.buttonSecondary}
              onClick={() => checkActive()}
            >
              Sí
            </button>
            <button
              className={global.buttonTertiary}
              onClick={() => setIsModalVisible(false)}
            >
              No
            </button>
          </div>
        </Modal>
      )}
      <style jsx>{`
        .blocked__user {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
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
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
          border-radius: 70px;
          padding: 1rem;
        }

        .blocked__body {
          /*Box model*/

          margin-bottom: 1rem;
        }
        .complaint__header {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .complaint__users {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
          justify-content: center;
          margin-left: 1rem;
        }

        .complaint__date {
          /*Box model*/

          margin-right: 1rem;
        }
        .complaint__body {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 1rem;
        }

        .buttons {
          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        button {
          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;
        }

        a {
          /*Text*/

          color: ${colors.secondary};

          /*Visuals*/

          text-decoration: none;
        }

        hr {
          /*Box model*/

          width: 100%;
          margin-bottom: 2rem;
        }
      `}</style>
    </>
  );
}
