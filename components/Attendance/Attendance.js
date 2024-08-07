/*Static imports*/

import { useState, useEffect } from "react";
import { colors } from "../../styles/frontend-conf.js";
import {
  MdDeleteOutline,
  MdClose,
  MdPets,
  MdHealthAndSafety,
} from "react-icons/md";
import { BsPatchCheckFill } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi";
import { toast } from "react-toastify";
import { server } from "../../server";
import { useRouter } from "next/router";
import global from "../../styles/global.module.css";
import dynamic from "next/dynamic";

/*Dynamic imports*/

const Modal = dynamic(() => import("/components/Modal/Modal"));
const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);
const LazyLoad = dynamic(() => import("react-lazyload"));

/** 
  * @author Sergio García Navarro
  * @returns Attendance component
  * @version 1.0
  * @description Attendance component
*/

/**
 * This function is an attendance component that receive props from page and displays them
 * in an attendance post created by user
 * @param props - props received from page.
 * @returns An attendance created by user.
 */
export default function Attendance(props) {
  const [user, setUser] = useState({});
  const [thread, setThread] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isImage, setIsImage] = useState(props?.image && props.image != `/attendancePhotos/undefined` ? true : false);
  const Router = useRouter();
  const date = new Date(props.createdAt);


  const getFull = (num) => {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  };

  async function getUsers() {
    const res = await fetch(`${server}/api/users/${props?.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setUser(data);
  }

  async function getThread() {
    const res = await fetch(`${server}/api/thread/${props?.threadId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setThread(data);
  }

  const deleteAttendance = async () => {
    await fetch(`${server}/api/attendances/${thread?.title}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props?.id }),
    });

    toast.error(`Se ha eliminado el cuidado`, {
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
    Router.reload();
  };

  useEffect(() => {
    getUsers();
    getThread();
  }, []);

  return (
    <>
      {user?.status?.name != "bloqueado" && (
        <div className={global.attendance}>
          <div className="attendance__header">
            <div className="header__column1">
              <p className={global.text2}>
                Hilo <strong>{thread?.title}</strong>
              </p>
              <p className={global.text2}>
                Por <strong>{thread?.username}</strong>
              </p>
            </div>
            <div className="header__column2">
              <div className="column2__delete">
                <p className={global.text2__bold}>{props?.location}</p>
                {props?.username === props?.session?.user.username && (
                  <button
                    className="delete__button"
                    onClick={() => setIsModalVisible(true)}
                  >
                    <MdDeleteOutline size={20} color={colors.secondary} />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="attendance__user">
            <div className="user__column1">
              <a
                href={`${server}/profile/${user?.username}`}
                aria-label={`Ir al perfil de ${props.username}`}
              >
                <FallbackImage
                  src={user?.image}
                  style={{ borderRadius: "70px" }}
                  width={40}
                  height={40}
                  alt="Imagen del usuario"
                />
              </a>
              <a
                href={`${server}/profile/${user?.username}`}
                aria-label={`Ir al perfil de ${props.username}`}
                className={global.link}
              >
                <strong>{props.username}</strong>
              </a>
              {(props?.session?.user.role === "gerente" ||
                props?.session?.user.role === "administrador") && (
                <BsPatchCheckFill color={`${colors.primary}`} size={18} />
              )}
              {props?.session?.user.role === "protectora" && (
                <MdPets color={`${colors.primary}`} size={18} />
              )}
              {props?.session?.user.role === "veterinaria" && (
                <MdHealthAndSafety color={`${colors.primary}`} size={18} />
              )}
              <p className={global.date}>- {date.toLocaleDateString()}</p>
              <div className="attendance__hour">
                <HiOutlineClock size={17} />
                <p className={global.date}>
                  {getFull(date.getHours())}:{getFull(date.getMinutes())}:
                  {getFull(date.getSeconds())}
                </p>
              </div>
            </div>
            <div className="user__column2">
              <p>
                <strong>{props?.animal === "" ? "" : "Animal:"}</strong>
                &nbsp;{props?.animal}
              </p>
              <p>
                <strong>{props?.breed === "" ? "" : "Raza:"}</strong>
                &nbsp;{props?.breed}
              </p>
            </div>
          </div>

          <hr className={global.attendance__line}></hr>
          <div className="attendance__description">
            <p className={global.text}>{props?.description}</p>
          </div>
          <div className="attendance__image">
            {isImage && (
              <FallbackImage
                src={props?.image}
                style={{ borderRadius: "20px", maxWidth: "50vw" }}
                width={1400}
                height={800}
                alt="Imagen de la publicación"
              />
            )}
          </div>
        </div>
      )}
      {isModalVisible && (
        <Modal>
          <button
            className="close__modal"
            onClick={() => setIsModalVisible(false)}
          >
            <MdClose size={30} color={`${colors.secondary}`} />
          </button>
          <h2 className={global.title3}>Eliminar cuidado</h2>
          <p className={global.text2}>
            ¿Estás seguro de eliminar este cuidado?
          </p>
          <div className="buttons">
            <button
              className={global.buttonSecondary}
              onClick={() => deleteAttendance()}
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

        .attendance__user {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 1rem;
        }

        .attendance__description {

          /*Box model*/

          word-wrap: break-word;
          max-width: 70vw;
          padding: 1rem;
        }

        .attendance__hour {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.3rem;
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

        .buttons {
          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          gap: 1rem;
        }

        .user__column1 {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;
        }

        .user__column1 > a {
          /*Box model*/

          display: flex;
          align-items: center;
        }

        .user__column2 {
          /*Box model*/

          display: flex;
          flex-direction: row;
          gap: 1rem;
        }

        .column2__delete {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          word-wrap: break-word;
          overflow-wrap: break-word;
          gap: 1rem;
        }

        .delete__button {
          /*Box model*/

          display: flex;
          align-items: center;
          padding: 1rem;

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 70px;
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
        }

        .attendance__header {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;

          /*Visuals*/

          background: linear-gradient(
            45deg,
            rgba(240, 129, 15, 1) 35%,
            rgba(249, 166, 3, 1) 100%
          );
          border-radius: 15px 15px 0px 0px;
        }

        .header__column1 {
          /*Box model*/

          display: flex;
          flex-direction: column;
          align-self: flex-start;
        }

        .attendance__image {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        p {
          /*Visuals*/

          white-space: pre-wrap;
        }

        a {
          /*Visuals*/

          text-decoration: none;
        }
      `}</style>
    </>
  );
}
