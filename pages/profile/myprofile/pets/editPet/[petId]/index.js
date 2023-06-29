/* Static imports */

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { FaUserPlus, FaWeight, FaBirthdayCake } from "react-icons/fa";
import { MdPets } from "react-icons/md";
import { GiSittingDog } from "react-icons/gi";
import { colors, fonts } from "/styles/frontend-conf";
import { server } from "/server";
import { toast } from "react-toastify";
import Head from "next/head";
import global from "/styles/global.module.css";
import dynamic from "next/dynamic";

/* Dynamic imports */

const Loader = dynamic(() => import("/components/Loader/Loader"));
const Layout = dynamic(() => import("/components/Layout/Layout"));
const DatePicker = dynamic(() => import("react-multi-date-picker"));
const LazyLoad = dynamic(() => import("react-lazyload"));
const FallbackImage = dynamic(() =>
  import("/components/FallbackImage/FallbackImage")
);

/**
 * @author Sergio García Navarro
 * @returns Edit pet page
 * @version 1.0
 * @description Edit pet page
 */
export default function EditPet({ pets }) {
  const { data: session, status } = useSession({ required: true });
  const Router = useRouter();
  const [name, setName] = useState(pets.name);
  const [animal, setAnimal] = useState(pets.animal);
  const [birthdate, setBirthdate] = useState(new Date(pets.birthdate));
  const [breed, setBreed] = useState(pets.breed);
  const [weight, setWeight] = useState(pets.weight);
  const [petImage, setPetImage] = useState(pets.image);
  const [previewImage, setPreviewImage] = useState(pets.image);
  const [isPreviewImage, setIsPreviewImage] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isValidate, setIsValidate] = useState(true);
  let imageCloudinary

  const uploadImage = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUploaded = e.target.files[0];

      setPetImage(imageUploaded);


      setPreviewImage(URL.createObjectURL(imageUploaded));
      setIsPreviewImage(true);
      
    }
  };

  const editPet = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      toast.error("El campo Nombre es obligatorio", {
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

    if (animal.trim() === "") {
      toast.error("El campo Animal es obligatorio", {
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

    if (breed.trim() === "") {
      toast.error("El campo Raza es obligatorio", {
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


    if (petImage != pets?.image) {

      const body = new FormData();

      body.append("file", petImage);

    if(server === 'http://localhost:3000'){
      await fetch(`${server}/api/images/petPhotos`, {
        method: "POST",
        body,
      });

    }

    if(server === 'https://sweet-home-bay.vercel.app/'){

        body.append("upload_preset", "sweet-home-images")

        const data = await fetch(`https://api.cloudinary.com/v1_1/dze6infst/image/upload`, {
          method: "POST",
          body,
        })

        imageCloudinary = await data.json()

        setPreviewImage(imageCloudinary.secure_url)

      }

  }

    setIsEditing(true);

    const res = await fetch(`${server}/api/petsById/${Router.query.petId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        animal: animal,
        breed: breed,
        name: name,
        weight: weight,
        image: server === 'https://sweet-home-bay.vercel.app/' ? imageCloudinary.secure_url : `/petPhotos/${petImage?.name}`,
        ownerId: pets.ownerId,
        ownerUsername: pets.ownerUsername,
        birthdate: birthdate,
      }),
    });

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
    } else {
      toast.success("Se ha editado la mascota correctamente", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      Router.push(`${server}/profile/myprofile/pets`);
    }
  };

  if (status === "loading") {
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
          <title>Editar mascota | Sweet Home</title>
        </Head>

        <div className="editPet__form">
          <div className="form">
            <div className="editPet__header">
              <h1 className="form__title">Editar mascota</h1>
              <p className={global.text2}>
                Introduzca los datos de la mascota. Los campos obligatorios
                vienen indicados con un asterisco (*):
              </p>
            </div>
            <form action="/api/pets" id="form">
              <div className="form-vertical__name">
                <div className="label">
                  <p className={global.text}>Nombre</p>
                  <FaUserPlus size={18} color={colors.secondary} />
                </div>
                <div className="animal__input">
                  <input
                    title="Introducir nombre"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="p. ej.: Hank"
                    className="input"
                  />
                </div>
              </div>

              <div className="form-vertical__animal">
                <div className="label">
                  <p className={global.text}>Animal</p>
                  <MdPets size={18} color={colors.secondary} />
                </div>
                <div className="animal__input">
                  <input
                    title="Introducir tipo de animal"
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
                  <GiSittingDog size={18} color={colors.secondary} />
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
              <div className="form-vertical__weight">
                <div className="label">
                  <p className={global.text}>Peso</p>
                  <FaWeight size={18} color={colors.secondary} />
                </div>
                <div className="weight__input">
                  <input
                    title="Introducir peso"
                    type="number"
                    name="weight"
                    value={weight}
                    step="0.01"
                    min={0}
                    onChange={(e) => setWeight(Math.abs(e.target.value))}
                    placeholder="p. ej.: 16"
                    className="input"
                  />
                  <p className={global.text2}> Kg</p>
                </div>
              </div>
              <div className="form-vertical__birthdate">
                <div className="label">
                  <p className={global.text}>Fecha de nacimiento</p>
                  <FaBirthdayCake size={18} color={colors.secondary} />
                </div>
                <div className="birthdate__input">
                  <DatePicker
                    title="Introducir fecha de nacimiento"
                    name="birthdate"
                    value={birthdate}
                    onChange={setBirthdate}
                    selected={birthdate}
                    format="DD/MM/YYYY"
                    maxDate={new Date()}
                    style={{
                      backgroundColor: `${colors.primary}`,
                      height: "2rem",
                      color: "#fafafa",
                      border: "2px solid #fafafa",
                      borderRadius: "20px",
                      fontFamily: "Poppins",
                      fontSize: "1rem",
                      padding: "3px 10px",
                    }}
                  />
                </div>
              </div>
            </form>
            <input
              className={global.buttonPrimary}
              type="submit"
              onClick={(e) => editPet(e)}
              value={isEditing ? "Editando.." : "Editar"}
            />
          </div>
        </div>

        <style jsx>
          {`
            .form__title {
              /*Box model*/

              margin-top: 2rem;
              margin-bottom: 3rem;
              display: flex;
              align-items: center;
              justify-content: center;

              /*Text*/

              font-size: 3.5rem;
              font-weight: 500;
              font-family: "Satisfy", sans-serif;
              color: white;
              text-align: center;
            }

            .container__header {
              /*Box model*/

              display: flex;

              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-bottom: 2rem;
            }

            .container__form {
              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            .form {
              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;

              width: 65vw;

              /*Visuals*/

              background-image: linear-gradient(
                45deg,
                rgba(240, 129, 15, 1) 35%,
                rgba(249, 166, 3, 1) 100%
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

            .form-vertical__name {
              /*Box model*/

              margin-top: 2rem;
            }

            .form-vertical__image {
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

            .weight__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 1rem;
            }

            .weight__input p{

              /*Box model*/

              margin-bottom: 1rem;
            }

            .description__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              justify-content: center;
              width: 115%;
            }

            .location__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
            }

            .birthday__input {
              /*Box model*/

              padding: 1rem;
              border-radius: 20px;
            }

            .image__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              gap: 1rem;
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

            input[type="text"]:focus {
              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176, 176, 176, 0.66);
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

            input[type="date"] {
              /*Box model*/

              height: 2rem;
              width: 20rem;
              padding: 0.4rem;
              margin-bottom: 2rem;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;
              color: ${colors.secondary};

              /*Visuals*/

              border-radius: 20px;
              border: 1px solid ${colors.secondary};
              background: transparent;
            }

            input[type="date"]:focus {
              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176, 176, 176, 0.66);
            }

            input[type="date"]::-webkit-calendar-picker-indicator {
              /*Visuals*/

              cursor: pointer;
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
              Para acceder a esta página debe ser administrador de Sweet Home
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
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const res = await fetch(`${server}/api/petsById/${context.query.petId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return {
    props: {
      pets: JSON.parse(JSON.stringify(data)),
    },
  };
}
