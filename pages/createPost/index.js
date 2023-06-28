/* Static imports */

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsImageFill, BsFillChatLeftTextFill } from "react-icons/bs";
import { colors, fonts } from "../../styles/frontend-conf";
import { toast } from "react-toastify";
import { server } from "/server";
import Head from "next/head";
import global from "../../styles/global.module.css";
import dynamic from "next/dynamic";

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
 * @returns Create post page
 * @version 1.0
 * @description Create post page
 */
export default function CreatePost() {
  const { data: session, status } = useSession({ required: true });
  const Router = useRouter();
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [postImage, setPostImage] = useState("");
  const [isPreviewImage, setIsPreviewImage] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [typePost, setTypePost] = useState("Normal");
  const [isPosting, setIsPosting] = useState(false);
  const [message, setMessage] = useState("");

  let imageCloudinary

  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUploaded = e.target.files[0];

      console.log(imageUploaded)

      setPostImage(imageUploaded);

      setPreviewImage(URL.createObjectURL(imageUploaded));
      setIsPreviewImage(true);
    }
  };

  const createPost = async (e) => {
    e.preventDefault();


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

   

    setIsPosting(true);

    if (postImage != "") {

      const body = new FormData();

      console.log(postImage)

      body.append("file", postImage);

      
      if(server === 'http://localhost:3000'){

        setPreviewImage(`/postPhotos/${postImage.name}`)

        await fetch(`${server}/api/images/postPhotos`, {
          method: "POST",
          body,
        });

      }

      if(server === 'https://sweet-home-bay.vercel.app/'){

        body.append("upload_preset", "sweet-home-images")

        console.log([...body])
        const data = await fetch(`https://api.cloudinary.com/v1_1/dze6infst/image/upload`, {
          method: "POST",
          body,
        })

        imageCloudinary = await data.json()

        console.log(imageCloudinary)

        setPreviewImage(imageCloudinary.secure_url)

      }

      
    }

    console.log(imageCloudinary)

    const res = await fetch(`${server}/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: session.user.id,
        location,
        description,
        username: session.user.username,
        image: server === 'https://sweet-home-bay.vercel.app/' ? imageCloudinary.secure_url : previewImage,
        type: typePost,
      }),
    }).catch((err) => console.log(err));

    const data = await res.json();

    if (data.error) {
      console.log(data.error);
      toast.success("Introduzca los campos obligatorios", {
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

      setIsPosting(false);

        Router.push(`${server}/home`);

      
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
          <title>Crear publicación | Sweet Home</title>
        </Head>

        <div className="form__position">
          <div className="form">
            <div className="create__header">
              <h1 className="form__title">Crear publicación</h1>
              <p className={global.text2}>
                Introduzca los datos de la publicación. Los campos obligatorios
                vienen indicados con un asterisco *:
              </p>
            </div>
            <div className="form-vertical">
              <div className="form-vertical__location">
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
              <div className="form-vertical__description">
                <div className="label">
                  <p className={global.text}>Descripción (*)</p>
                  <BsFillChatLeftTextFill size={18} color={colors.secondary} />
                </div>
                <div className="description__input">
                  <InputEmoji
                    title="Introducir descripción"
                    type="text"
                    name="Description"
                    id="post"
                    value={description}
                    onChange={setDescription}
                    placeholder="p. ej.: Esta es mi mascota..."
                    fontFamily={`${fonts.default}`}
                    borderColor={`${colors.primary}`}
                  />
                </div>
              </div>
              <div className="form-vertical__image">
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
                    accept="image/*"
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
              <div className="form-vertical__typePost">
                <label className="label">
                  <p className={global.text}>Elige el tipo de publicación:</p>
                </label>
                <select
                  name="type"
                  onChange={(e) => setTypePost(e.target.value)}
                  required
                >
                  <option default value="Normal">
                    Normal
                  </option>
                  <option value="Fauna silvestre">Fauna silvestre</option>
                  <option value="Adopción">Adopción</option>
                  <option value="Animal abandonado">Animal abandonado</option>
                  <option value="Animal perdido">Animal perdido</option>
                </select>
              </div>
            </div>
            <input
              className={global.buttonPrimary}
              type="submit"
              onClick={(e) => createPost(e)}
              value={isPosting ? "Creando.." : "Crear"}
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
              justify-content: center;
              width: 70vw;
              padding: 2rem;

              /*Visuals*/

              background-image: linear-gradient(
                180deg,
                rgba(240, 129, 15, 1) 35%,
                rgba(249, 166, 3, 1) 200%
              );
              border-radius: 20px;
            }

            .form-vertical{

              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;

            }

            .form__position {
              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            .create__header {
              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-bottom: 3rem;
            }

            .form__title {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            }

            .label {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              marin-bottom: 2rem;
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
              border: 2px solid ${colors.primary};
            }

            .form-vertical__location {
              /*Box model*/

              margin-top: 2rem;
              width: 100%;
            }

            .form-vertical__image {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 100%;
            }

            .form-vertical__typePost {
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
              word-break: break-all;
              overflow-wrap: break-word;

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

            select {
              /*Box model*/

              width: 40rem;
              height: 2rem;
              margin-bottom: 2rem;

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

            input[type="file"] {
              /*Box model*/

              width: 100%;
              height: 100%;

              /*Visuals*/

              border-radius: 20px;
              background-color: transparent;
              border: 2px solid ${colors.secondary};
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
              border-radius: 20px;
            }

            input[type="file"]::-webkit-file-upload-button {
              display: none;
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
