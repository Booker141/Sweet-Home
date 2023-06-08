/* Static imports */

import { HiBookmark, HiLockClosed, HiLockOpen } from "react-icons/hi";
import { GiDogBowl } from "react-icons/gi";
import { MdReport } from "react-icons/md";
import { colors } from "/styles/frontend-conf";
import { fonts } from "/styles/frontend-conf";
import global from "/styles/global.module.css";
import dynamic from "next/dynamic";

/* Dynamic imports */

const Link = dynamic(() => import("next/link"));
const TrademarkWhite = dynamic(() =>
  import("/components/TrademarkWhite/TrademarkWhite")
);
const LazyLoad = dynamic(() => import("react-lazyload"));

/** 
  * @author Sergio García Navarro
  * @returns Settings sidebar component
  * @version 1.0
  * @description Settings sidebar component
*/

/**
 * This function is a sidebar component 
 * @returns A sidebar for settings pages.
 */
export default function SettingsSidebar() {
  return (
    <>
      <aside className="settingsSidebar-layout">
        <div className="settingsSidebar-layout__container1">
          <a
            className="sidebar__link"
            href="/profile/myprofile/settings/publicProfile"
            alt="Ir a editar perfil público"
          >
            <HiLockOpen size={20} color={`${colors.secondary}`} />
            Editar perfil público
          </a>
          <a
            className="sidebar__link"
            href="/profile/myprofile/settings/privateInformation"
            alt="Ir a editar información privada"
          >
            <HiLockClosed size={20} color={`${colors.secondary}`} />
            Gestión de información privada
          </a>
          <a
            className="sidebar__link"
            href="/profile/myprofile/saved"
            alt="Ir a Guardados"
          >
            <HiBookmark
              size={20}
              color={colors.secondary}
              styles={{ fontWeight: "bold" }}
            />
            Guardados
          </a>
          <a
            className="sidebar__link"
            href="/profile/myprofile/pets"
            alt="Ir a Mascotas"
          >
            <GiDogBowl size={20} color={`${colors.secondary}`} />
            Mis mascotas
          </a>
          <a
            className="sidebar__link"
            href="/profile/myprofile/complaints"
            alt="Ir a Denuncias"
          >
            <MdReport
              size={20}
              color={colors.secondary}
              styles={{ fontWeight: "bold" }}
            />
            Mis denuncias
          </a>
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
                &copy; 2022 Sweet Home Corporation. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <style jsx>{`
        .settingsSidebar-layout {
          /*Box model*/

          display: flex;
          flex-direction: column;
          width: 20%;
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

        .settingsSidebar-layout__container1 {
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

        .settingsSidebar-layout a {
          /*Text*/

          font-family: ${fonts.default};
          text-decoration: none;
          color: ${colors.secondary};
        }

        .settingsSidebar-layout a:hover {
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

        ::placeholder {
          /*Text*/

          color: ${colors.primary};
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
