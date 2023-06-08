/* Static imports */

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MdDateRange, MdOutlineError, MdTitle } from "react-icons/md";
import {
  BsFillChatLeftTextFill,
  BsFillPersonFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { colors, statusColors, fonts } from "/styles/frontend-conf";
import { server } from "/server";
import global from "/styles/global.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";

/* Dynamic imports */

const Loader = dynamic(() => import("/components/Loader/Loader"));
const DatePicker = dynamic(() => import("react-multi-date-picker"));
const Layout = dynamic(() => import("/components/Layout/Layout"));
const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns Edit new page
 * @version 1.0
 * @description Edit new page
 */
export default function EditNew({ news }) {
  const { data: session, status } = useSession({ required: true });
  const Router = useRouter();
  const [title, setTitle] = useState(news.title);
  const [date, setDate] = useState(new Date(news.date));
  const [introduction, setIntroduction] = useState(news.introduction);
  const [body, setBody] = useState(news.body);
  const [conclusion, setConclusion] = useState(news.conclusion);
  const [author, setAuthor] = useState(news.author);
  const [isPosting, setIsPosting] = useState(false);
  const [isValidate, setIsValidate] = useState(true);

  /**
   * It returns the current date in the format YYYY-MM-DD
   * @returns The current date in the format of YYYY-MM-DD
   */
  const calcDate = () => {
    const currentDate = new Date();
    const maxDate =
      currentDate.getFullYear() +
      "-" +
      (currentDate.getMonth() + 1) +
      "-" +
      currentDate.getDate();

    return maxDate;
  };
  /**
   * It validates the author's name, if it doesn't match the regular expression, it shows an error
   * message and icon, if it does, it shows a success message and icon
   * @param e - event
   */
  const validate = (e) => {
    const regAuthor =
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

    //Validación autor

    if (e.target.name == "author") {
      if (!author.match(regAuthor)) {
        document
          .getElementById("author__error")
          .classList.add("form__input-authorError--active");
        document
          .getElementById("success__author")
          .classList.remove("form__success-icon--active");
        setIsValidate(false);
      } else {
        document
          .getElementById("author__error")
          .classList.remove("form__input-authorError--active");
        document
          .getElementById("success__author")
          .classList.add("form__success-icon--active");
        setIsValidate(true);
      }
    }
  };

  const editNew = async (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      toast.error("El campo Título es obligatorio", {
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

    if (author.trim() === "") {
      toast.error("El campo Autor es obligatorio", {
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

    if (introduction.trim() === "") {
      toast.error("El campo Introducción es obligatorio", {
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

    if (body.trim() === "") {
      toast.error("El campo Desarrollo es obligatorio", {
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

    if (isValidate) {
      setIsPosting(true);

      const res = await fetch(`${server}/api/news/${Router.query.newId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          introduction: introduction,
          body: body,
          date: date,
          conclusion: conclusion,
          author: author,
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
        toast.success("Se ha editado la noticia correctamente", {
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
      }
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
  if (session.user.role === "administrador") {
    return (
      <Layout>
        <Head>
          <title>Editar noticia | Sweet Home</title>
        </Head>

        <div className="editNew__form">
          <div className="form">
            <div className="editNew__header">
              <h1 className="form__title">Editar noticia</h1>
              <p className={global.text2}>
                Introduzca los datos de la noticia. Los campos obligatorios
                vienen indicados con un asterisco (*):
              </p>
            </div>
            <form action="/api/news" id="form">
              <div className="form-vertical__title">
                <label className="label">
                  <p className={global.text}>Título (*)</p>
                  <MdTitle size={18} color={colors.secondary} />
                </label>
                <div className="title__input">
                  <input
                    title="Introducir título"
                    type="text"
                    name="title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input"
                  />
                </div>
              </div>
              <div className="form-vertical__author">
                <label className="label">
                  <p className={global.text}>Autor (*)</p>
                  <BsFillPersonFill size={18} color={colors.secondary} />
                </label>
                <div className="author__input">
                  <input
                    title="Introducir autor"
                    type="text"
                    name="author"
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder="p. ej.: Marta Sánchez"
                    className="input"
                  />
                  <div id="success__author" className="form__success-icon">
                    <BsFillCheckCircleFill
                      size={20}
                      color={statusColors.success}
                    />
                  </div>
                </div>
                <div id="author__error" className="form__input-authorError">
                  <div className="error__icon">
                    <MdOutlineError size={25} color={colors.secondary} />
                  </div>
                  <p className={global.text2}>
                    Debe seguir el formato indicado
                  </p>
                </div>
              </div>
              <div className="form-vertical__date">
                <label className="label">
                  <p className={global.text}>Fecha (*)</p>
                  <MdDateRange size={18} color={colors.secondary} />
                </label>
                <DatePicker
                  title="Introducir fecha de creación"
                  name="date"
                  value={date}
                  onChange={setDate}
                  selected={date}
                  format="DD/MM/YYYY"
                  maxDate={new Date()}
                  style={{
                    backgroundColor: `${colors.secondary}`,
                    height: "2rem",
                    color: "#1c1c1c",
                    border: "2px solid #fafafa",
                    borderRadius: "20px",
                    fontFamily: "Poppins",
                    fontSize: "1rem",
                    padding: "3px 10px",
                  }}
                />
              </div>
              <div className="form-vertical__introduction">
                <label className="label">
                  <p className={global.text}>Introducción (*)</p>
                  <BsFillChatLeftTextFill size={18} color={colors.secondary} />
                </label>
                <div className="introduction__input">
                  <textarea
                    title="Introducir introducción"
                    name="introduction"
                    value={introduction}
                    required
                    onChange={(e) => setIntroduction(e.target.value)}
                    placeholder="p. ej.: Texto de introducción..."
                  />
                </div>
              </div>
              <div className="form-vertical__body">
                <label className="label">
                  <p className={global.text}>Desarrollo (*)</p>
                  <BsFillChatLeftTextFill size={18} color={colors.secondary} />
                </label>
                <div className="body__input">
                  <textarea
                    title="Introducir desarrollo"
                    name="body"
                    value={body}
                    required
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="p. ej.: Texto de desarrollo..."
                  />
                </div>
              </div>
              <div className="form-vertical__conclusion">
                <label className="label">
                  <p className={global.text}>Conclusión</p>
                  <BsFillChatLeftTextFill size={18} color={colors.secondary} />
                </label>
                <div className="conclusion__input">
                  <textarea
                    title="Introducir conclusión"
                    name="conclusion"
                    value={conclusion}
                    onChange={(e) => setConclusion(e.target.value)}
                    placeholder="p. ej.: Texto de conclusión..."
                  />
                </div>
              </div>
            </form>
            <input
              className={global.buttonPrimary}
              type="submit"
              onClick={(e) => editNew(e)}
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

            .editNew__header {
              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-bottom: 3rem;
            }

            .editNew__form {
              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            .form__title {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
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

              width: 30vw;
              height: 2vh;
              padding: 0.4vw;
              margin-bottom: 1rem;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;

              /*Visuals*/

              border-radius: 20px;
              border: 2px solid ${colors.primary};
            }

            .form-vertical__body {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .form-vertical__title {
              /*Box model*/

              margin-top: 2rem;
            }

            .body__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
            }

            .author__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 1rem;
            }

            .conclusion__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
            }

            .introduction__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
            }

            .form-vertical__date {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-bottom: 2rem;
            }

            .date__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              justify-content: center;
              width: 115%;
            }

            .form-vertical__introduction {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .form-vertical__conclusion {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .form-vertical__author {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .title__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              gap: 1rem;
            }

            /*ERRORES*/

            .form__input-authorError {
              /*Position*/

              position: relative;

              /*Box model*/

              display: none;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 0;
            }

            .form__input-authorError p {
              /*Box model*/

              margin-left: 2rem;
            }

            .error__icon {
              /*Box model*/

              margin-left: 1rem;
              display: flex;
              flex-direction: row;
              align-items: center;
            }

            .form__input-authorError--active {
              /*Position*/

              margin-bottom: 2rem;
              width: 22vw;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 1;
            }

            .form__input-dateError {
              /*Position*/

              position: absolute;
              margin-left: 20rem;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              margin-bottom: 2rem;
              margin-left: 7rem;

              width: 100%;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 0;
            }

            .form__input-dateError p {
              /*Box model*/

              margin-left: 2rem;
            }

            .form__input-dateError--active {
              /*Position*/

              position: absolute;
              margin-left: 20rem;
              margin-bottom: 2rem;

              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              width: 100%;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 1;
            }

            .form__success-icon {
              /*Position*/

              position: relative;

              bottom: 0.8rem;
              z-index: 999;

              /*Visuals*/

              opacity: 0;
              color: ${statusColors.success};
            }

            .form__success-icon--active {
              /*Position*/

              position: relative;
              bottom: 0rem;
              z-index: 999;

              /*Visuals*/

              opacity: 1;
              color: ${statusColors.success};
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

            input[type="text"] {
              /*Box model*/

              width: 40vw;
              height: 5vh;
              padding: 0.4vw;
              margin-bottom: 2rem;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;

              /*Visuals*/

              border-radius: 20px;
              border: 0;
              transition: 0.2s ease all;
            }

            input[type="text"]:focus {
              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176, 176, 176, 0.66);
            }

            input[type="date"] {
              /*Box model*/

              width: 40vw;
              height: 5vh;
              padding: 0.4vw;
              margin-bottom: 2rem;

              /*Text*/

              font-family: ${fonts.default};
              color: ${colors.primary};
              font-size: 1rem;

              /*Visuals*/

              border-radius: 20px;
              border: 0;
              transition: 0.2s ease all;
            }

            input[type="date"]:focus {
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

              width: 40vw;
              height: 10vh;
              padding: 0.4vw;
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
  const res = await fetch(`${server}/api/news/${context.query.newId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return {
    props: {
      news: JSON.parse(JSON.stringify(data)),
    },
  };
}
