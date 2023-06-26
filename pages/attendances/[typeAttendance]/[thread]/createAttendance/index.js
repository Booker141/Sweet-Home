/* Static imports */

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdLocationOn, MdPets } from "react-icons/md";
import { BsImageFill, BsFillChatLeftTextFill } from "react-icons/bs";
import { FaDog } from "react-icons/fa";
import { colors, fonts } from "/styles/frontend-conf";
import { toast } from "react-toastify";
import { server } from "/server";
import dynamic from "next/dynamic";
import Head from "next/head";
import global from "/styles/global.module.css";

/*Dynamic imports*/

const Loader = dynamic(() => import("/components/Loader/Loader"));
const Layout = dynamic(() => import("/components/Layout/Layout"));
const InputEmoji = dynamic(() => import("react-input-emoji"));
const LazyLoad = dynamic(() => import("react-lazyload"));
const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);

/**
 * @author Sergio García Navarro
 * @returns Create Attendance page
 * @version 1.0
 * @description Create Attendance page
 */
export default function CreateAttendance() {
  const { data: session, status } = useSession({ required: true });
  const Router = useRouter();
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [attendanceImage, setAttendanceImage] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [isPreviewImage, setIsPreviewImage] = useState(false);
  const [message, setMessage] = useState("");

  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUploaded = e.target.files[0];

      setAttendanceImage(imageUploaded);

      setPreviewImage(URL.createObjectURL(imageUploaded));
      setIsPreviewImage(true);
    }
  };

  const createAttendance = async (e) => {
    e.preventDefault();

    if (description.trim() === "") {
      toast.error("El campo descripción es obligatorio", {
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

    if (attendanceImage != "") {
      const body = new FormData();

      body.append("image", attendanceImage);

      await fetch(`${server}/api/images/attendancePhotos`, {
        method: "POST",
        body,
      });
    }

    setIsPosting(true);

    const res = await fetch(
      `${server}/api/attendances/${Router.query.thread}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
          location,
          description,
          animal,
          breed,
          username: session.user.username,
          image: attendanceImage
            ? `/attendancePhotos/${attendanceImage?.name}`
            : "",
        }),
      }
    ).catch((err) => console.log(err));

    const data = await res.json();

    if (data.error) {
      console.log(data.error);
      toast.error("Introduzca los campos obligatorios", {
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
    } else {
      toast.success("Se ha publicado el cuidado correctamente", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(() => {
        Router.push(
          `${server}/attendances/${Router.query.typeAttendance}/${Router.query.thread}`
        );
      }, 10000)
      
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
  if (session) {
    return (
      <Layout>
        <Head>
          <title>Crear publicación de cuidado | Sweet Home</title>
        </Head>
        <div className={global.content}>
          <div className={global.dots}>
            <div className="form">
              <h1 className="form__title">Crear publicación de cuidado</h1>
              <p className={global.text2}>
                Introduzca los datos de la publicación. Los campos obligatorios
                vienen indicados con un asterisco *:
              </p>
              <form action="/api/attendances" id="form">
                <div className="form-vertical__email">
                  <div className="label">
                    <p className={global.text}>Ubicación</p>
                    <MdLocationOn size={18} color={colors.secondary} />
                  </div>
                  <div className="location__input">
                    <input
                      title="Introducir ubicación"
                      type="text"
                      name="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="p. ej.: Cádiz"
                      className="input"
                    />
                  </div>
                </div>
                <div className="form-vertical__old">
                  <div className="label">
                    <p className={global.text}>Seleccionar imagen:</p>
                    <BsImageFill size={18} color={colors.secondary} />
                  </div>
                  <div className="image__input">
                    <input
                      title="Introducir imagen"
                      type="file"
                      name="image"
                      id="image__input"
                      onChange={(e) => uploadImage(e)}
                      accept="image/png, image/jpeg"
                      placeholder="Ningún archivo seleccionado"
                      className="input"
                    ></input>
                  </div>
                </div>
                {isPreviewImage && (
                  <FallbackImage
                    src={previewImage}
                    alt="Imagen de previsualización"
                    style={{ borderRadius: "20px" }}
                    width={1000}
                    height={700}
                  />
                )}
                <div className="form-vertical__description">
                  <div className="label">
                    <p className={global.text}>Descripción (*)</p>
                    <BsFillChatLeftTextFill
                      size={18}
                      color={colors.secondary}
                    />
                  </div>
                  <div className="description__input">
                    <InputEmoji
                      title="Introducir descripción"
                      type="text"
                      name="Description"
                      id="attendance"
                      value={description}
                      onChange={setDescription}
                      placeholder="p. ej.: Esta es el cuidado.."
                      fontFamily={`${fonts.default}`}
                      borderColor={`${colors.primary}`}
                    />
                  </div>
                </div>
                <div className="form-vertical__animal">
                  <div className="label">
                    <p className={global.text}>Tipo de animal</p>
                    <FaDog size={18} color={colors.secondary} />
                  </div>
                  <div className="animal__input">
                    <input
                      title="Introducir animal"
                      type="text"
                      name="animal"
                      value={animal}
                      onChange={(e) => setAnimal(e.target.value)}
                      placeholder="p. ej.: Perro"
                      className="input"
                    />
                  </div>
                </div>
                <div className="form-vertical__breed">
                  <div className="label">
                    <p className={global.text}>Raza</p>
                    <MdPets size={18} color={colors.secondary} />
                  </div>
                  <div className="breed__input">
                    <input
                      title="Introducir raza"
                      type="text"
                      name="breed"
                      value={breed}
                      onChange={(e) => setBreed(e.target.value)}
                      placeholder="p. ej.: Retriever"
                      className="input"
                    />
                  </div>
                </div>
              </form>
              <input
                className={global.buttonPrimary}
                type="submit"
                onClick={(e) => createAttendance(e)}
                value={isPosting ? "Creando.." : "Crear"}
              />
            </div>
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

            .form__title {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              margin-top: 2rem;
              margin-bottom: 1rem;

              /*Text*/

              font-family: "Satisfy";
              font-size: 4rem;
              font-weight: 500;
              color: ${colors.secondary};
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

            .form-vertical__old {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 100%;
            }

            .form-vertical__description {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .form-vertical__new2 {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 100%;
            }

            .description__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              height: 1vh;
              max-height: 1vh;
              width: 45vw;
              max-width: 45vw;
              padding: 4rem 0 4rem 0;
              justify-content: center;
            }

            .location__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
            }

            .image__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              gap: 1rem;
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

            input[type="submit"] {
              /*Box model*/

              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              margin-top: 2rem;
              margin-bottom: 2rem;
            }

            input[type="file"] {
              /*Box model*/

              width: 100%;
              height: 100%;

              /*Visuals*/

              border-radius: 20px;
              background-color: transparent;
              border: 1px solid ${colors.secondary};
              color: ${colors.secondary};
            }

            input[type="file"]::before {
              /*Box model*/

              padding: 0.5rem;
              margin-right: 1rem;

              /*Visuals*/

              cursor: pointer;
              content: "Subir imagen..";
              background-color: ${colors.primary};
              color: ${colors.secondary};
              border-radius: 5px;
            }

            input[type="file"]::-webkit-file-upload-button {
              display: none;
            }

            input[type="text"]:focus {
              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176, 176, 176, 0.66);
            }

            textarea:focus {
              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176, 176, 176, 0.66);
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
              border: 1px solid ${colors.primary};
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
              Para acceder a esta página debe iniciar sesión
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
