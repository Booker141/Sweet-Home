/* Static imports */

import { fonts, colors } from "../../styles/frontend-conf.js";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useState, useEffect } from "react";
import { server } from "../../server";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import global from "../../styles/global.module.css";
import dynamic from "next/dynamic";

/*Dynamic imports*/

const Modal = dynamic(() => import("/components/Modal/Modal"));
const LazyLoad = dynamic(() => import("react-lazyload"));

/** 
  * @author Sergio García Navarro
  * @returns Type attendance component
  * @version 1.0
  * @description Type attendance component
*/

/**
 * This function is a type attendance component that receive props from page and displays them
 * in a type attendance card created by administrator
 * @param props - props received from page.
 * @returns A type attendance created by administrator.
 */
export default function TypeAttendance(props) {
  const router = useRouter();
  const { data: session } = useSession();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (session.user.role === "administrador") {
      setIsAdmin(true);
    }
  }, []);

  const deleteTypeAttendance = async () => {
    await fetch(`${server}/api/typeAttendance/${props?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsModalVisible(false);
    toast.error("Se ha eliminado el tipo de cuidado", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    router.push(`${server}/attendances`);
  };

  return (
    <>
      <div className={global.typeAttendance}>
        <div className="typeAttendance__header">
          <h1 className="typeAttendance__title">{props?.name}</h1>
          {isAdmin && (
            <div className="header__buttons">
              <button
                className="edit__button"
                onClick={() =>
                  router.push(`/dashboard/editTypeAttendance/${props?.id}`)
                }
              >
                <MdOutlineEdit size={20} color={colors.secondary} />
              </button>
              <button
                className="delete__button"
                onClick={() => setIsModalVisible(true)}
              >
                <MdDeleteOutline size={20} color={colors.secondary} />
              </button>
            </div>
          )}
        </div>
        <hr className={global.white__line2} />
        <p className={global.text}>{props?.description}</p>
        <button
          id="access__button"
          className={global.buttonTertiary}
          onClick={() => router.push(`/attendances/${props?.name}`)}
          aria-label={"Ir a " + `${props?.name}`}
        >
          Entrar
        </button>
      </div>
      {isModalVisible && (
        <Modal>
          <h2 className={global.title3}>Eliminar tipo de cuidado</h2>
          <p className={global.text2}>
            ¿Estás seguro de eliminar este tipo de cuidado?
          </p>
          <div className="buttons">
            <button
              className={global.buttonSecondary}
              onClick={() => deleteTypeAttendance()}
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
      <style jsx>
        {`
          #access__button {
            /*Box model*/

            margin-top: 1rem;
            margin-bottom: 1rem;
            margin-left: 2rem;
          }

          .typeAttendance__title {
            /*Text*/

            font-size: 1.4rem;
            font-weight: 600;
            font-family: ${fonts.default};
          }

          .typeAttendance__header {
            /*Box model*/

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            margin-top: 1rem;
            margin-bottom: 1rem;
          }

          .header__buttons {
            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

            margin-top: 0.5rem;
            margin-right: 1rem;
          }

          .delete__button {
            /*Box model*/

            padding: 1rem;

            /*Visuals*/

            border: none;
            background: transparent;
            cursor: pointer;
            box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
            border-radius: 70px;
          }

          .edit__button {
            /*Box model*/

            padding: 1rem;

            /*Visuals*/

            border: none;
            background: transparent;
            cursor: pointer;
            box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
            border-radius: 70px;
          }

          h1 {
            /*Box model*/

            margin-right: 2rem;
            margin-left: 2rem;
            margin-top: 2rem;
            margin-bottom: 2rem;

            /*Text*/

            font-size: 1.4rem;
            font-weight: 600;
          }

          p {
            /*Box model*/

            margin-right: 2rem;
            padding: 2rem;
          }

          .buttons {
            /*Box model*/

            display: flex;
            gap: 1rem;
          }

          a:hover {
            /*Text*/

            color: ${colors.tertiary};

            /*Visuals*/

            transition: 0.3s ease all;
          }
        `}
      </style>
    </>
  );
}
