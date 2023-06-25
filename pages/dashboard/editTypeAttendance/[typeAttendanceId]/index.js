/* Static imports */

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdTitle, MdOutlineError } from "react-icons/md";
import {
  BsFillChatLeftTextFill,
  BsFillXCircleFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { statusColors, colors, fonts } from "/styles/frontend-conf";
import { toast } from "react-toastify";
import { server } from "/server";
import global from "/styles/global.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";

/* Dynamic imports */

const Loader = dynamic(() => import("/components/Loader/Loader"));
const Layout = dynamic(() => import("/components/Layout/Layout"));
const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns Edit type attendance page
 * @version 1.0
 * @description Edit type attendance page
 */
export default function EditTypeAttendance({ typeAttendance }) {
  const { data: session, status } = useSession({ required: true });

  const Router = useRouter();
  const [description, setDescription] = useState(typeAttendance?.description);
  const [name, setName] = useState(typeAttendance?.name);
  const [isValidate, setIsValidate] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [message, setMessage] = useState("");

  /**
   * It sends a POST request to the server with the title and answer of the question, and if there's no
   * error, it redirects the user to the FAQ page
   * @param e - The event object
   */
  const editTypeAttendance = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      toast.error("El campo Tipo de cuidado es obligatorio", {
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

    if (description.trim() === "") {
      toast.error("El campo Descripción es obligatorio", {
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

    const res = await fetch(
      `${server}/api/typeAttendance/${Router.query.typeAttendanceId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          primaryName: typeAttendance?.name,
          name: name,
          description: description,
        }),
      }
    );

    setIsPosting(true);

    const data = await res.json();

    if (data.error) {
      console.log(data.error);
      setMessage("Introduzca los campos obligatorios");
    } else {
      if (data.message === "Ya existe este tipo de cuidado") {
        toast.error("Ya existe este tipo de cuidado", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsPosting(false);
        return;
      } else {
        toast.success("Se ha editado el tipo de cuidado", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        Router.push(`${server}/attendances`);
      }
    }
  };

  if (status == "loading") {
    return (
      <>
        <div className={global.loading}>
          <p>Cargando..</p>
        </div>
        <Loader />
      </>
    );
  }
  if (session.user.role === "administrador") {
    return (
      <Layout>
        <Head>
          <title>Editar tipo de cuidado | Sweet Home</title>
        </Head>

        <div className="form__position">
          <div className="form">
            <div className="editTypeAttendance__header">
              <h1 className="form__title">Editar tipo de cuidado</h1>
              <p className={global.text2}>
                Introduzca los datos del tipo de cuidado. Los campos
                obligatorios vienen indicados con un asterisco (*):
              </p>
            </div>
            <form action="/api/typeAttendance" id="form">
              <div className="form-vertical__name">
                <label className="label">
                  <p className={global.text2}>Tipo de cuidado (*)</p>
                  <MdTitle size={18} color={colors.secondary} />
                </label>
                <div className="name__input">
                  <input
                    title="Introducir tipo de cuidado"
                    type="text"
                    name="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    placeholder="p. ej.: Alimentación"
                    className="input"
                  />
                </div>
              </div>
              <div className="form-vertical__description">
                <label className="label">
                  <p className={global.text}>Descripción (*)</p>
                  <BsFillChatLeftTextFill size={18} color={colors.secondary} />
                </label>
                <div className="description__input">
                  <textarea
                    title="Introducir descripción"
                    name="description"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="p. ej.: Es importante..."
                  />
                </div>
              </div>
            </form>
            <input
              className={global.buttonPrimary}
              type="submit"
              onClick={(e) => editTypeAttendance(e)}
              value={isPosting ? "Editando.." : "Editar"}
            />
          </div>
        </div>
        <style jsx>
          {`
            .form {
              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;

              width: 70vw;

              /*Visuals*/

              background-image: linear-gradient(
                180deg,
                rgba(240, 129, 15, 1) 35%,
                rgba(249, 166, 3, 1) 200%
              );
              background-size: 100% 110%;
              border-radius: 20px;
            }

            .form__position {
              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            .form__name {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              margin-bottom: 1rem;
            }

            .createTypeAttendance__header {
              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 2rem;
            }

            .label {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
            }

            .label p {
              /*Box model*/

              margin-right: 1rem;

              /*Visuals*/

              color: ${colors.secondary};
            }

            .input {
              /*Box model*/

              width: 100%;
              height: 2rem;
              padding: 0.4rem;
              margin-bottom: 1rem;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;

              /*Visuals*/

              border-radius: 20px;
              border: 1px solid ${colors.primary};
            }

            .form-vertical__description {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 40vw;
            }

            .form-vertical__name {
              /*Box model*/

              margin-top: 2rem;
            }

            .description__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              justify-content: center;
              width: 40vw;
            }

            .name__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
            }

            /*ERRORES*/

            .form__input-nameError {
              display: none;
              flex-direction: row;
              align-items: center;
              margin-left: 20rem;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 0;
            }

            .form__input-nameError p {
              /*Box model*/

              margin-left: 2rem;
            }

            .form__input-nameError--active {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              width: 30vw;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 1;
            }

            .error__icon {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              margin-left: 1rem;
            }

            .submit__error {
              /*Box model*/

              display: none;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: ${colors.secondary};

              /*Visuals*/

              background-color: ${statusColors.error};
            }

            .submit__error--active {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 0.5rem;
              width: 65%;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: ${colors.secondary};

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
            }

            .submit__error--active2 {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 0.5rem;
              width: 65%;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: ${colors.secondary};

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.success};
            }

            h1 {
              /*Box model*/

              margin-top: 2rem;
              margin-bottom: 3rem;

              /*Text*/

              font-size: 3.5rem;
              font-weight: 500;
              font-family: "Satisfy", sans-serif;
              color: white;
              text-align: center;
            }

            input[type="text"] {
              /*Box model*/

              width: 20vw;
              height: 2rem;
              padding: 0.4rem;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;

              /*Visuals*/

              border-radius: 20px;
              border: 1px solid ${colors.primary};
            }

            input[type="text"]:focus {
              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176, 176, 176, 0.66);
            }

            input[type="submit"] {
              /*Box model*/

              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              margin-top: 2rem;
              margin-bottom: 2rem;
            }

            ::placeholder {
              /*Text*/

              color: ${colors.primary};
            }

            textarea {
              /*Box model*/

              width: 100%;
              height: 3rem;
              padding: 0.4rem;
              margin-bottom: 2rem;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;

              /*Visuals*/

              border-radius: 20px;
              border: 2px solid ${colors.primary};
            }

            textarea:focus {
              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176, 176, 176, 0.66);
            }

            a {
              /*Misc*/

              cursor: pointer;
            }
          `}
        </style>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className={global.content}>
          <div className="message">
            <h1 className={global.title7}>
              Para acceder a esta página debe iniciar sesión como administrador
            </h1>
            <button className={global.buttonPrimary} onClick={() => signIn()}>
              Iniciar sesión
            </button>
          </div>
        </div>
        <style jsx>
          {`

                        .message{

                            /*Box model*/

                            display: flex
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            
                            
                        }
                        
                    `}
        </style>
      </Layout>
    );
  }
}

export async function getServerSideProps(context) {
  const res = await fetch(
    `${server}/api/typeAttendance/${context.query.typeAttendanceId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();

  const typeAttendance = JSON.parse(JSON.stringify(data));

  return {
    props: {
      typeAttendance,
    },
  };
}
