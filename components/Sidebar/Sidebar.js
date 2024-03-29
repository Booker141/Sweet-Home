/* Static imports */

import {
  HiHome,
  HiBookmark,
  HiNewspaper,
  HiQuestionMarkCircle,
  HiHand,
} from "react-icons/hi";
import {
  MdPets,
  MdContactMail,
  MdHealthAndSafety,
  MdClose,
  MdOutlineBlock,
  MdReport,
  MdOutlineError,
} from "react-icons/md";
import { BsFillFilePostFill, BsFillBellFill } from "react-icons/bs";
import {
  GiDogBowl,
  GiSittingDog,
  GiDogHouse,
  GiHummingbird,
  GiCat,
} from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import { colors, statusColors } from "../../styles/frontend-conf";
import { fonts } from "../../styles/frontend-conf";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { server } from "../../server";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import global from "../../styles/global.module.css";

/*Dynamic imports*/

const Modal = dynamic(() => import("/components/Modal/Modal"));
const TrademarkWhite = dynamic(() =>
  import("/components/TrademarkWhite/TrademarkWhite")
);
const Link = dynamic(() => import("next/link"));
const UserSidebar = dynamic(() =>
  import("/components/UserSidebar/UserSidebar")
);
const LazyLoad = dynamic(() => import("react-lazyload"));

/** 
  * @author Sergio García Navarro
  * @returns Sidebar component
  * @version 1.0
  * @description Sidebar component
*/

/**
 * This function is a sidebar component
 * @returns A sidebar.
 */
export default function Sidebar() {
  const [users, setUsers] = useState([]);
  const [shelters, setShelters] = useState([]);
  const [vets, setVets] = useState([]);
  const [following, setFollowing] = useState([]);
  const [isReporting, setIsReporting] = useState(false);
  const [typeAttendances, setTypeAttendances] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [report, setReport] = useState("");
  const [reportImage, setReportImage] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();
  let imageCloudinary

  const uploadImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUploaded = e.target.files[0];

      setReportImage(imageUploaded);
    }
  };

  const sendReport = async (e) => {
    e.preventDefault();

    if (report.trim() === "") {
      document
        .getElementById("report__error")
        .classList.add("form__input-reportError--active");
      return;
    }

    if (reportImage != "") {

      const body = new FormData();
      
      body.append("file", reportImage);

      if(server === 'http://localhost:3000'){

        await fetch(`${server}/api/images/reportPhotos`, {
          method: "POST",
          body,
        });

      }

      if(server === 'https://sweet-home-bay.vercel.app'){

        body.append("upload_preset", "sweet-home-images")

        const data = await fetch(`https://api.cloudinary.com/v1_1/dze6infst/image/upload`, {
          method: "POST",
          body,
        })

        imageCloudinary = await data.json()

      }
    }

    const res = await fetch(`${server}/api/reports`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        report: report,
        image: server === 'https://sweet-home-bay.vercel.app' && reportImage != "" ? imageCloudinary.secure_url : `/reportPhotos/${reportImage?.name}`,
        username: session.user.username,
      }),
    }).catch((err) => console.log(err));

    const data = await res.json();

    if (data.error) {
      toast.error("Introduzca el informe", {
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
      toast.success("Se ha enviado correctamente", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setIsModalVisible(false);
    setReport("");
  };

  const fetchUsers = async () => {
    const res = await fetch(`${server}/api/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setUsers(data);
  };

  const fetchShelters = async () => {
    const res = await fetch(`${server}/api/shelters`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setShelters(data);
  };

  const fetchVets = async () => {
    const res = await fetch(`${server}/api/vets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setVets(data);
  };

  const fetchTypeAttendances = () => {
    fetch(`${server}/api/typeAttendance`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTypeAttendances(data);
      });
  };

  useEffect(() => {
    fetchUsers();
    fetchTypeAttendances();
    fetchShelters();
    fetchVets();
  }, []);

  return (
    <>
      <aside className="sidebar-layout">
        <div className="sidebar-layout__container1">
          <a
            className="sidebar__link"
            href="/home"
            alt="Ir a apartado de reciente en home"
          >
            <HiHome size={20} color={`${colors.secondary}`} />
            Reciente
          </a>
          <a
            className="sidebar__link"
            href="/allShelters"
            alt="Ir a apartado de protectoras"
          >
            <MdPets size={20} color={`${colors.secondary}`} />
            Protectoras
          </a>
          <a
            className="sidebar__link"
            href="/allVets"
            alt="Ir a apartado de veterinarias"
          >
            <MdHealthAndSafety size={20} color={`${colors.secondary}`} />
            Veterinarias
          </a>
          <a className="sidebar__link" href="/allPets" alt="Ir a Mascotas">
            <GiDogBowl size={20} color={`${colors.secondary}`} />
            Mascotas
          </a>
        </div>
        <div className="sidebar-layout__container2">
          <a
            className="sidebar__link"
            href="/profile/myprofile/posts"
            alt="Ir a publicaciones propias"
          >
            <BsFillFilePostFill size={20} color={`${colors.secondary}`} />
            Mis publicaciones
          </a>
          {(session?.user.role === "veterinaria" ||
            session?.user.role === "protectora" ||
            session?.user.role === "usuario") && (
            <a
              className="sidebar__link"
              href="/profile/myprofile/complaints"
              alt="Ir a mis denuncias"
            >
              <MdReport size={20} color={colors.secondary} />
              Mis denuncias
            </a>
          )}
          {(session?.user.role === "gerente" ||
            session?.user.role === "administrador") && (
            <a
              className="sidebar__link"
              href={`/profile/${session?.user.username}/notifications`}
              alt="Ir a mis notificaciones"
            >
              <BsFillBellFill size={20} color={colors.secondary} />
              Mis notificaciones
            </a>
          )}
          <button
            className="sidebar__link"
            onClick={() => setIsModalVisible(true)}
            alt="Enviar informe"
          >
            <MdOutlineBlock
              size={20}
              color={colors.secondary}
              styles={{ fontWeight: "bold" }}
            />
            Enviar informe
          </button>
        </div>
        <div className="sidebar-layout__container3">
          <h1 className="title__sidebar">Explorar</h1>
          <a
            className="sidebar__link"
            href="/news"
            alt="Ir a apartado de noticias"
          >
            <HiNewspaper size={20} color={`${colors.secondary}`} />
            Noticias
          </a>
          <a
            className="sidebar__link"
            href="/contact"
            alt="Ir a apartado de contacto"
          >
            <MdContactMail size={20} color={`${colors.secondary}`} />
            Contacto
          </a>
          <a
            className="sidebar__link"
            href="/about"
            alt="Ir a apartado de sobre nosotros"
          >
            <HiHand size={20} color={`${colors.secondary}`} />
            Quiénes somos
          </a>
          <a
            className="sidebar__link"
            href="/adoption"
            alt="Ir a apartado de adopción de mascotas"
          >
            <GiDogHouse size={20} color={`${colors.secondary}`} />
            Adopción
          </a>
          <a
            className="sidebar__link"
            href="/lost"
            alt="Ir a apartado de mascotas perdidas"
          >
            <GiSittingDog size={20} color={`${colors.secondary}`} />
            Mascotas perdidas
          </a>
          <a
            className="sidebar__link"
            href="/abandoned"
            alt="Ir a apartado de mascotas abandonadas"
          >
            <GiCat size={20} color={`${colors.secondary}`} />
            Mascotas abandonadas
          </a>
          <a
            className="sidebar__link"
            href="/wild"
            alt="Ir a apartado de fauna silvestre"
          >
            <GiHummingbird size={20} color={`${colors.secondary}`} />
            Fauna silvestre
          </a>
          <a
            className="sidebar__link"
            href="/faq"
            alt="Ir a apartado de preguntas frecuentes"
          >
            <HiQuestionMarkCircle size={20} color={`${colors.secondary}`} />
            FAQ
          </a>
        </div>

        <div className="sidebar-layout__container5">
          <h1 className="title__sidebar">Cuentas sugeridas</h1>
          {users?.length === 0 && (
            <p className={global.text2}>No existe ningún usuario.</p>
          )}
          {users
            ?.filter(
              (user) =>
                user?.username !== session?.user.username &&
                user?.role?.name !== "administrador" &&
                user?.role?.name !== "gerente" &&
                user?.status?.name != "bloqueado"
            )
            .slice(0, 5)
            .map(({ _id, image, username, role, createdAt }) => {
              return (
                <>
                  <UserSidebar
                    key={_id}
                    id={_id}
                    image={image}
                    username={username}
                    role={role}
                    createdAt={createdAt}
                  />
                </>
              );
            })}
          <div className="users__link">
            <Link href="/allUsers" prefetch={false}>
              <a className={global.link} aria-label="Ir a ver más usuarios">
                Ver todos →
              </a>
            </Link>
          </div>
        </div>

        <div className="sidebar-layout__container6">
          <h1 className="title__sidebar">Cuentas de protectoras</h1>
          {shelters?.length === 0 && (
            <p className={global.text2}>No hay ninguna protectora.</p>
          )}
          {shelters
            ?.filter(
              (shelter) =>
                shelter?.username !== session?.user.username &&
                shelter?.status?.name != "bloqueado"
            )
            .slice(0, 5)
            .map(({ _id, image, username, role, createdAt }) => {
              return (
                <>
                  <UserSidebar
                    key={_id}
                    id={_id}
                    image={image}
                    username={username}
                    role={role}
                    createdAt={createdAt}
                  />
                </>
              );
            })}
          <div className="users__link">
            {shelters?.length !== 0 && (
              <Link href="/allShelters">
                <a
                  className={global.link}
                  aria-label="Ir a ver más protectoras"
                >
                  Ver todos →
                </a>
              </Link>
            )}
          </div>
        </div>

        <div className="sidebar-layout__container7">
          <h1 className="title__sidebar">Cuentas de veterinarias</h1>
          {vets?.length === 0 && (
            <p className={global.text2}>No hay ninguna veterinaria.</p>
          )}
          {vets
            ?.filter(
              (vet) =>
                vet?.username !== session?.user.username &&
                vet?.status?.name != "bloqueado"
            )
            .slice(0, 5)
            .map(({ _id, image, username, role, createdAt }) => {
              return (
                <>
                  <UserSidebar
                    key={_id}
                    id={_id}
                    image={image}
                    username={username}
                    role={role}
                    createdAt={createdAt}
                  />
                </>
              );
            })}
          <div className="users__link">
            {vets?.length !== 0 && (
              <Link href="/allVets">
                <a
                  className={global.link}
                  aria-label="Ir a ver más veterinarias"
                >
                  Ver todos →
                </a>
              </Link>
            )}
          </div>
        </div>

        <div className="sidebar-layout__container8">
          <h1 className="title__sidebar">Cuidados</h1>
          {typeAttendances?.length === 0 && (
            <p className={global.text2}>No existe ningún cuidado.</p>
          )}
          {typeAttendances.map(({ _id, name }) => {
            return (
              <>
                <button
                  key={_id}
                  className="attendance__tag"
                  onClick={() => router.push(`/attendances/${name}`)}
                >
                  #{`${name}`}
                </button>
              </>
            );
          })}
        </div>

        <div className="footer">
          <div className="footer__links">
            <Link
              className={global.link3}
              href="/userManual"
              prefetch={false}
              passHref
            >
              <a aria-label="Ir a Información">Información</a>
            </Link>
            <Link
              className={global.link3}
              href="/privacy"
              prefetch={false}
              passHref
            >
              <a aria-label="Ir a Privacidad">Privacidad</a>
            </Link>
            <Link
              className={global.link3}
              href="/conditions"
              prefetch={false}
              passHref
            >
              <a aria-label="Ir a Condiciones">Condiciones</a>
            </Link>
            <Link
              className={global.link3}
              href="/accessibility"
              prefetch={false}
              passHref
            >
              <a aria-label="Ir a Accesibilidad">Accesibilidad</a>
            </Link>
            <Link
              className={global.link3}
              href="/rules"
              prefetch={false}
              passHref
            >
              <a aria-label="Ir a Reglas y Políticas">Reglas y Políticas</a>
            </Link>
            <div className="copyright">
              <TrademarkWhite />
              <p>
                &copy; 2023 Sweet Home Corporation. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {isModalVisible && (
        <Modal>
          <button
            className="close__modal"
            onClick={() => setIsModalVisible(false)}
          >
            <MdClose size={30} color={`${colors.secondary}`} />
          </button>
          <h2 className={global.title5}>Enviar informe</h2>
          <p className={global.text2}>
            Escriba a continuación el informe que quiera enviar:
          </p>
          <div className="report">
            <div className="report__input">
              <textarea
                title="Introducir informe"
                name="report"
                value={report}
                required
                onChange={(e) => setReport(e.target.value)}
                placeholder="Escribe aquí el informe..."
              />
            </div>
          </div>
          <div id="report__error" className="form__input-reportError">
            <div className="error__icon">
              <MdOutlineError size={30} color={colors.secondary} />
            </div>
            <p className={global.text2}>Debe escribir su informe.</p>
          </div>
          <div className="buttons">
            <div className="image">
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
            <button className="report__button" onClick={(e) => sendReport(e)}>
              {isReporting ? "Enviando" : "Enviar"}
            </button>
          </div>
        </Modal>
      )}
      <style jsx>{`
        .sidebar-layout {
          /*Box model*/

          display: flex;
          flex-direction: column;
          width: 17%;
          height: 100%;
          min-width: 17%;
          max-width: 17%;
          padding: 2rem;
          margin-top: 0;
          margin-left: 0;
          margin-right: 0;

          /*Text*/

          font-family: ${fonts.default};

          /*Visuals*/

          background-color: #fa9820;
          border-radius: 0 0 20px 0;
        }

        .error__icon {
          /*Box model*/

          margin-left: 1rem;
        }

        .form__error-icon {
          /*Position*/

          position: relative;
          right: -1.1rem;
          bottom: 0.9rem;
          z-index: 999;

          /*Visuals*/

          opacity: 0;
          color: ${statusColors.error};
        }

        .form__input-reportError {
          /*Box model*/

          display: none;
          flex-direction: row;
          align-items: center;
          width: 17vw;

          /*Text*/

          font-family: "Poppins", sans-serif;
          color: #fafafa;

          /*Visuals*/

          border-radius: 20px;
          background-color: ${statusColors.error};
          opacity: 0;
        }

        .form__input-reportError p {
          /*Box model*/

          margin-left: 2rem;
        }

        .form__input-reportError--active {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          width: 17vw;

          /*Text*/

          font-family: "Poppins", sans-serif;
          color: #fafafa;

          /*Visuals*/

          border-radius: 20px;
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);
          background-color: ${statusColors.error};
          opacity: 1;
        }

        .attendance__tag {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          gap: 0.5rem;
          width: 7vw;
          padding: 1rem;

          /*Text*/

          color: #fafafa;
          font-family: "Poppins", sans-serif;

          /*Visuals*/

          border-radius: 70px;
          border: 2px solid #fafafa;
          transition: 0.3s ease all;
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);

          cursor: pointer;
          background: transparent;
        }

        .attendance__tag:hover {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          gap: 0.5rem;
          width: 7vw;
          padding: 1rem;

          /*Text*/

          color: #fafafa;

          /*Visuals*/

          border-radius: 70px;
          background-color: #f9a603;
        }

        .report {
          /*Box model*/

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 1rem;
          width: 100%;
        }

        .report__input {
          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 115%;
        }

        .image__input {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
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
          align-items: center;
          gap: 2rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }

        .report__button {
          /*Box model*/

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 50px;
          min-width: 150px;
          max-width: 200px;
          padding: 1rem;

          /*Text*/

          color: #f0810f;
          font-family: "Poppins", sans-serif;
          font-style: bold;

          /*Visuals*/

          cursor: pointer;
          background-color: white;
          border-radius: 40px;

          /*Misc*/

          transition: all 0.3s ease-in-out;
        }

        .report__button:hover {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          height: 50px;
          min-width: 150px;
          max-width: 200px;
          padding: 1rem;

          /*Text*/

          color: #ffff;
          font-family: "Poppins", sans-serif;
          font-style: 500;

          /*Visuals*/

          cursor: pointer;

          background-color: #f9a603;
          border-radius: 40px;
          border: 1px solid #ffff;

          /*Misc*/

          transition: all 0.3s ease-in-out;
        }

        .title__sidebar {
          /*Text*/

          font-size: 1.4rem;
          font-weight: 600;
          font-family: ${fonts.default};
        }

        .sidebar__link {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 0;
          gap: 1rem;

          /*Text*/

          font-family: ${fonts.default};
          text-decoration: none;
          color: ${colors.secondary};
          font-size: 1rem;

          /*Visuals*/

          transition: all 0.3s ease-in-out;
        }

        .sidebar__link:hover {
          /*Text*/

          color: ${colors.tertiary};
        }

        .sidebar-layout__container1 {
          /*Box model*/

          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;

          /*Visuals*/

          background-color: ${colors.primary};
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);

          border-radius: 20px;
        }

        .sidebar-layout__container2 {
          /*Box model*/

          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;

          /*Visuals*/

          background-color: ${colors.primary};
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);

          border-radius: 20px;
        }

        .sidebar-layout__container3 {
          /*Box model*/

          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;

          /*Visuals*/

          background-color: ${colors.primary};
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);

          border-radius: 20px;
        }

        .sidebar-layout__container4 {
          /*Box model*/

          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;

          /*Visuals*/

          background-color: ${colors.primary};
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);

          border-radius: 20px;
        }

        .sidebar-layout__container5 {
          /*Box model*/

          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;

          /*Visuals*/

          background-color: ${colors.primary};
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);

          border-radius: 20px;
        }

        .sidebar-layout__container6 {
          /*Box model*/

          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;

          /*Visuals*/

          background-color: ${colors.primary};
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);

          border-radius: 20px;
        }

        .sidebar-layout__container7 {
          /*Box model*/

          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1rem;

          /*Visuals*/

          background-color: ${colors.primary};
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);

          border-radius: 20px;
        }

        .sidebar-layout__container8 {
          /*Box model*/

          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 2rem;

          /*Visuals*/

          background-color: ${colors.primary};
          box-shadow: 0px 5px 10px 0px rgba(168, 97, 20, 1);

          border-radius: 20px;
        }

        .sidebar-layout a {
          /*Text*/

          font-family: ${fonts.default};
          text-decoration: none;
          color: ${colors.secondary};
        }

        .sidebar-layout a:hover {
          /*Text*/

          font-family: ${fonts.default};

          color: ${colors.tertiary};
        }

        .footer {
          /*Box model*/

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
        }

        .copyright {
          /*Box model*/

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          /*Text*/

          font-size: 0.9rem;
        }

        .footer__links {
          /*Box model*/

          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          font-size: 0.9rem;
          gap: 1rem;
          align-items: center;
        }

        .users__link {
          /*Box model*/

          margin-bottom: 2rem;
        }

        .footer__links a {
          /*Text*/

          font-family: ${fonts.default};
          text-decoration: none;
          color: ${colors.secondary};
        }

        .footer__links a:hover {
          /*Text*/

          font-family: ${fonts.default};
          color: ${colors.tertiary};
          transition: 0.3s ease all;
        }

        .copyright {
          /*Text*/

          font-family: ${fonts.default};
          text-decoration: none;
          color: ${colors.secondary};
        }

        h1 {
          /*Text*/

          font-size: 3.5rem;
          font-weight: 600;
          font-family: "Archivo Black", sans-serif;
          color: #fafafa;
        }

        a {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1rem;

          /*Text*/

          font-family: ${fonts.default};
          text-decoration: none;
        }

        a:hover {
          /*Text*/

          font-family: ${fonts.default};
          color: ${colors.tertiary};
        }

        input[type="file"] {
          /*Box model*/

          width: 20vw;
          height: 3vh;

          /*Text*/

          font-family: ${fonts.default};
          font-size: 1rem;

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

        ::placeholder {
          /*Text*/

          color: ${colors.primary};
        }

        textarea {
          /*Box model*/

          width: 30vw;
          height: 10vh;
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

        button {
          /*Box model*/

          display: flex;
          flex-direction: row;
          align-items: center;

          /*Visuals*/

          border: none;
          background: transparent;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
