/* Static imports */

import { useState } from "react";
import { colors, statusColors, fonts } from "styles/frontend-conf.js";
import { MdOutlineError } from "react-icons/md";
import { BsFillCheckCircleFill, BsFillLockFill } from "react-icons/bs";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillInfoCircle,
} from "react-icons/ai";
import { server } from "/server";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Head from "next/head";
import dynamic from "next/dynamic";
import global from "styles/global.module.css";

/*Dynamic imports*/

const Link = dynamic(() => import("next/link"));
const Layout = dynamic(() => import("/components/BasicLayout/BasicLayout"));
const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns Reset password 2 page
 * @version 1.0
 * @description Reset password 2 page
 */
export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const [isReseting, setIsReseting] = useState(false);

  const router = useRouter();

  const showNewPassword = () => {
    const passwordInput = document.getElementById("newPassword");

    if (passwordInput.type === "password") {
      document.getElementById("show__icon3").style.display = "none";
      document.getElementById("show__icon4").style.display = "inline";
      passwordInput.type = "text";
    } else {
      document.getElementById("show__icon3").style.display = "inline";
      document.getElementById("show__icon4").style.display = "none";
      passwordInput.type = "password";
    }
  };

  const showNewPassword2 = () => {
    const passwordInput = document.getElementById("newPassword2");

    if (passwordInput.type === "password") {
      document.getElementById("show__icon5").style.display = "none";
      document.getElementById("show__icon6").style.display = "inline";
      passwordInput.type = "text";
    } else {
      document.getElementById("show__icon5").style.display = "inline";
      document.getElementById("show__icon6").style.display = "none";
      passwordInput.type = "password";
    }
  };

  const validate = (e) => {
    // Regular expressions

    const regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])[A-Za-z\d!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]{8,}$/;

    if (e.target.name == "newPassword") {
      if (newPassword.length < 8 || !newPassword.match(regPassword)) {
        document
          .getElementById("newPassword__error")
          .classList.add("form__input-newPasswordError--active");
        document
          .getElementById("success__newPassword")
          .classList.remove("form__success-icon--active");
        setIsValidate(false);
      } else {
        document
          .getElementById("newPassword__error")
          .classList.remove("form__input-newPasswordError--active");
        document
          .getElementById("success__newPassword")
          .classList.add("form__success-icon--active");
        setIsValidate(true);
      }
    }

    if (e.target.name == "newPassword2") {
      if (newPassword2.length < 8 || !newPassword2.match(regPassword)) {
        document
          .getElementById("newPassword2__error")
          .classList.add("form__input-newPassword2Error--active");
        document
          .getElementById("success__newPassword2")
          .classList.remove("form__success-icon--active");
        setIsValidate(false);
      } else {
        document
          .getElementById("newPassword2__error")
          .classList.remove("form__input-newPassword2Error--active");
        document
          .getElementById("success__newPassword2")
          .classList.add("form__success-icon--active");
        setIsValidate(true);
      }
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();

    if (isValidate) {
      const res = await fetch(
        `${server}/api/resetPassword/${router.query.email}/${router.query.token}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: newPassword,
            confirmPassword: newPassword2,
          }),
        }
      );

      setIsReseting(true);

      const data = await res.json();

      if (data.message === "Ha expirado el enlace.") {
        toast.error("El enlace ha expirado", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsReseting(false);
        return;
      }

      if (data.message === "Ha ocurrido un error al verificar el enlace.") {
        toast.error(`Ha ocurrido un error al verificar el enlace`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsReseting(false);
        return;
      }

      if (data.message === "Se ha restablecido la contraseña.") {
        toast.success(`Se ha restablecido la contraseña`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        router.push(`${server}/auth/signIn`);
      }

      if (
        data.message === "La nueva contraseña no puede ser igual a la antigua."
      ) {
        toast.error(`La nueva contraseña no puede ser igual a la antigua.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsReseting(false);
        return;
      }

      if (data.message === "No existe el usuario.") {
        toast.error(`No existe la dirección de correo electrónico.`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsReseting(false);
        return;
      }

      if (data.message === "Ambas contraseñas no coinciden.") {
        toast.error(`Ambas contraseñas no coinciden`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setIsReseting(false);
        return;
      }
    } else {
      toast.error(`Por favor, introduzca los datos correctamente`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setIsReseting(false);
      return;
    }
  };
  return (
    <Layout>
      <>
        <Head>
          <title>Restablecer contraseña | Sweet Home</title>
        </Head>
        <div className={global.content}>
          <div className="form">
            <h1 className="form__title">Restablecer contraseña</h1>
            <form className="form-vertical">
              <div className="form-vertical__new">
                <div className="label">
                  <p className={global.text}>Contraseña nueva</p>
                  <BsFillLockFill size={18} color={colors.secondary} />
                </div>
                <div className="password__input">
                  <input
                    title="Introducir contraseña nueva"
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    required
                    onChange={(e) => setNewPassword(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder="Contraseña nueva"
                    className="input"
                  ></input>
                  <a
                    className="password--visibility"
                    onClick={() => showNewPassword()}
                  >
                    <AiFillEye
                      id="show__icon3"
                      size={20}
                      color={colors.primary}
                    />
                    <div style={{ display: "none" }} id="show__icon4">
                      <AiFillEyeInvisible size={20} color={colors.primary} />
                    </div>
                  </a>
                  <div id="success__newPassword" className="form__success-icon">
                    <BsFillCheckCircleFill
                      size={20}
                      color={statusColors.success}
                    />
                  </div>
                </div>
              </div>

              <div
                id="newPassword__error"
                className="form__input-newPasswordError"
              >
                <div className="error__icon">
                  <MdOutlineError size={30} color={colors.secondary} />
                </div>
                <p className={global.text2}>
                  Debe estar compuesta como mínimo por 8 caracteres y tener un
                  dígito, una mayúscula, una minúscula y un caracter especial.
                </p>
              </div>
              <div className="form-vertical__new2">
                <div className="label">
                  <p className={global.text}>Repetir contraseña nueva</p>
                  <BsFillLockFill size={18} color={colors.secondary} />
                </div>
                <div className="password__input">
                  <input
                    title="Repetir contraseña nueva"
                    type="password"
                    id="newPassword2"
                    name="newPassword2"
                    value={newPassword2}
                    required
                    onChange={(e) => setNewPassword2(e.target.value)}
                    onKeyUp={(e) => validate(e)}
                    onBlur={(e) => validate(e)}
                    placeholder="Confirmar contraseña"
                    className="input"
                  ></input>
                  <a
                    className="password--visibility"
                    onClick={() => showNewPassword2()}
                  >
                    <AiFillEye
                      id="show__icon5"
                      size={20}
                      color={colors.primary}
                    />
                    <div style={{ display: "none" }} id="show__icon6">
                      <AiFillEyeInvisible size={20} color={colors.primary} />
                    </div>
                  </a>
                  <div
                    id="success__newPassword2"
                    className="form__success-icon"
                  >
                    <BsFillCheckCircleFill
                      size={20}
                      color={statusColors.success}
                    />
                  </div>
                </div>
              </div>
              <div
                id="newPassword2__error"
                className="form__input-newPassword2Error"
              >
                <div className="error__icon">
                  <MdOutlineError size={30} color={colors.secondary} />
                </div>
                <p className={global.text2}>
                  Debe estar compuesta como mínimo por 8 caracteres, tener un
                  dígito, una mayúscula, una minúscula y un caracter especial.
                </p>
              </div>
            </form>

            <div className="tooltip">
              <div className="tooltip__icon">
                <AiFillInfoCircle size={20} color={colors.secondary} />
                <p className={global.text2}> Información contraseña</p>
              </div>
              <div className="tooltiptext">
                <p> - La contraseña debe tener al menos 8 caracteres.</p>
                <p> - La contraseña debe tener al menos una letra mayúscula.</p>
                <p> - La contraseña debe tener al menos una letra minúscula.</p>
                <p>
                  {" "}
                  - La contraseña debe tener al menos un carácter especial.
                </p>
                <p> - La contraseña debe tener al menos un número.</p>
              </div>
            </div>
            <input
              className={global.buttonPrimary}
              type="submit"
              onClick={(e) => resetPassword(e)}
              value={isReseting ? "Restableciendo.." : "Restablecer"}
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

              width: 100%;

              /*Visuals*/

              background-image: linear-gradient(
                45deg,
                rgba(240, 129, 15, 1) 35%,
                rgba(249, 166, 3, 1) 100%
              );
              background-size: 100% 110%;
              border-radius: 20px;
            }

            .form-vertical {
              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
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
              border: none;
            }

            .tooltip {
              /*Position*/

              position: relative;

              /*Box model*/

              display: inline-block;
              margin-bottom: 0.5rem;
            }

            .tooltip__icon {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              width: 100%;
            }

            .tooltip__icon p {
              /*Box model*/

              margin-left: 1.6rem;
            }

            .tooltip .tooltiptext {
              /*Position*/

              position: absolute;
              z-index: 100;

              /*Box model*/

              width: 20rem;
              padding: 1rem;

              /*Text*/

              text-align: center;

              /*Visuals*/

              border-radius: 10px;
              visibility: hidden;
              background-color: ${colors.quaternary};
              color: ${colors.secondary};
            }

            .tooltip:hover .tooltiptext {
              /*Visuals*/

              visibility: visible;
            }

            .tooltiptext p {
              /*Text*/

              font-size: 1rem;
              font-family: ${fonts.default};
            }

            .form-vertical__new {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
              width: 20vw;
            }

            .form-vertical__new2 {
              /*Box model*/

              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            .password__input {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              width: 20vw;
            }

            .password--visibility {
              /*Position*/

              position: relative;
              top: 0.9rem;
              right: 2rem;
            }

            /*ERRORES*/

            .error__icon {
              /*Box model*/

              margin-left: 1rem;
            }

            .form__success-icon {
              /*Position*/

              position: relative;

              z-index: 999;

              /*Visuals*/

              opacity: 0;
              color: ${statusColors.success};
            }

            .form__success-icon--active {
              /*Position*/

              position: relative;
              z-index: 999;
              bottom: 0.5rem;

              /*Visuals*/

              opacity: 1;
              color: ${statusColors.success};
            }

            .form__input-passwordError {
              /*Box model*/

              display: none;
              flex-direction: row;
              align-items: center;
              width: 20vw;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 0;
            }

            .form__input-passwordError p {
              /*Box model*/

              margin-left: 1rem;
            }

            .form__input-passwordError--active {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
              background-color: ${statusColors.error};
              opacity: 1;
            }

            .form__input-newPasswordError {
              /*Box model*/

              display: none;
              flex-direction: row;
              align-items: center;
              width: 20vw;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 0;
            }

            .form__input-newPasswordError p {
              /*Box model*/

              margin-left: 1rem;
            }

            .form__input-newPasswordError--active {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
              background-color: ${statusColors.error};
              opacity: 1;
            }

            .form__input-newPassword2Error {
              /*Box model*/

              display: none;
              flex-direction: row;
              align-items: center;
              width: 20vw;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              background-color: ${statusColors.error};
              opacity: 0;
            }

            .form__input-newPassword2Error p {
              /*Box model*/

              margin-left: 1rem;
            }

            .form__input-newPassword2Error--active {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-items: center;

              /*Text*/

              font-family: "Poppins", sans-serif;
              color: #fafafa;

              /*Visuals*/

              border-radius: 20px;
              box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
              background-color: ${statusColors.error};
              opacity: 1;
            }

            .error__icon {
              /*Box model*/

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

            .form-vertical {
              /*Position*/

              position: relative;

              /*Box model*/

              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-top: 4rem;
              margin-bottom: 3rem;
              width: 20vw;
              height: fit-content;
              padding: 1vh 2vh;
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

              height: 2rem;
              padding: 0.4rem;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 1rem;

              /*Visuals*/

              border-radius: 20px;
              border: 0;
              transition: 0.2s ease all;
            }

            input[type="password"]:focus {
              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176, 176, 176, 0.66);
            }

            ::placeholder {
              /*Text*/

              color: ${colors.primary};
            }

            h1 {
              /*Box model*/

              margin-top: 2rem;
              margin-bottom: 3rem;
            }

            a {
              /*Box model*/

              display: flex;
              flex-direction: row;
              align-self: flex-start;

              /*Text*/

              font-family: ${fonts.default};
              font-size: 0.8rem;
              color: ${colors.secondary};
              font-weight: bold;

              /*Misc*/

              cursor: pointer;
              text-decoration: none;
              border: none;
            }
          `}
        </style>
      </>
    </Layout>
  );
}
