import { colors, fonts } from "../../styles/frontend-conf.js";
import { MdDeleteOutline, MdOutlineEdit, MdClose } from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi";
import { useState, useEffect } from "react";
import { server } from "../../server";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import global from "../../styles/global.module.css";

/* Dynamic imports */

const Modal = dynamic(() => import("/components/Modal/Modal"));
const LazyLoad = dynamic(() => import("react-lazyload"));

/** 
  * @author Sergio García Navarro
  * @returns New component
  * @version 1.0
  * @description New component
*/

/**
 * This function is a new component that receive props from page and displays them
 * in a new format created by an administrator
 * @param props - props received from page.
 * @returns A new created by an administrator.
 */
export default function New(props) {
  const { data: session } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const Router = useRouter();

  const deleteNew = async () => {
    await fetch(`${server}/api/news/${props?.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsModalVisible(false);
    toast.error("Se ha eliminado la noticia", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    Router.push(`${server}/news`);
  };

  useEffect(() => {
    if (session) {
      getRole();
    }
  }, []);

  const getRole = async () => {
    const res = await fetch(`${server}/api/users/${session?.user.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data?.role.name === "administrador") {
      setIsAdmin(true);
    }
  };

  return (
    <>
      <div key={props?._id} className={global.new}>
        <article key={props?.id}>
          <div className="new__header">
            <h2 className="new__title">{props?.title}</h2>
            {isAdmin && (
              <div className="buttons">
                <button
                  className="edit__button"
                  onClick={() => Router.push(`dashboard/editNew/${props?.id}`)}
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
          <hr className={global.white__line}></hr>
          <div className="new__time">
            <HiOutlineClock size={17} color={`${colors.secondary}`} />
            <h3 className={global.date2}>
              Publicada el
              {new Date(props?.date).toLocaleDateString().slice(0, 10)}
            </h3>
          </div>
          <h3 className={global.text3__bold}>{props?.author}</h3>
          <p className={global.text2}>{props?.introduction}</p>
          <p className={global.text2}>{props?.body}</p>
          <p className={global.text2}>{props?.conclusion}</p>
        </article>
      </div>
      {isModalVisible && (
        <Modal>
          <button
            className="close__modal"
            onClick={() => setIsModalVisible(false)}
          >
            <MdClose size={30} color={`${colors.secondary}`} />
          </button>
          <h2 className={global.title5}>Eliminar noticia</h2>
          <p className={global.text2}>
            ¿Estás seguro de eliminar esta noticia?
          </p>
          <div className="modal__buttons">
            <button
              className={global.buttonSecondary}
              onClick={() => deleteNew()}
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
          .buttons {
            /*Box model*/

            display: flex;
            flex-direction: row;
            gap: 1rem;
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
            justify-content: center;
            align-items: center;
            align-self: flex-end;
            gap: 1rem;
            margin-bottom: 1rem;
          }

          .modal__buttons {
            /*Box model*/

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1rem;
          }

          .delete__button {
            /*Box model*/

            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            padding: 1rem;

            /*Visuals*/

            border: none;
            background: ${colors.primary};
            box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
            border-radius: 70px;
            cursor: pointer;
          }

          .edit__button {
            /*Box model*/

            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
            padding: 1rem;

            /*Visuals*/

            border: none;
            background: ${colors.primary};
            cursor: pointer;
            border-radius: 70px;
            box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
          }

          .new__time {
            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
          }

          .new__title {
            /*Text*/

            font-size: 2rem;
            font-weight: 600;
            font-family: ${fonts.default};
            color: ${colors.secondary};
          }

          .new__header {
            /*Box model*/

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .text {
            /*Box model*/

            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          p {
            white-space: pre-wrap;
          }

          hr {
            /*Box model*/

            width: 100%;
            margin-bottom: 3rem;
          }
        `}
      </style>
    </>
  );
}
