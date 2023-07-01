/* Static imports */

import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { server } from "/server";
import { colors, fonts } from "/styles/frontend-conf";
import global from "/styles/global.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";

/* Dynamic imports */

const Loader = dynamic(() => import("/components/Loader/Loader"));
const Layout = dynamic(() => import("/components/Layout/Layout"));
const Notification = dynamic(() =>
  import("/components/Notification/Notification")
);
const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns Notifications page
 * @version 1.0
 * @description Notifications page
 */
export default function Notifications({ notifications }) {
  const { data: session, status } = useSession({ required: true });
  const [isSortedByType, setIsSortedByType] = useState(false);
  const [notificationsList, setNotificationsList] = useState(notifications);

  const sortByFilters = (e) => {
    if (e === "type") {
      setIsSortedByType(!isSortedByType);
      const sortedNotifications = notifications?.sort((a, b) =>
        a.type.name > b.type.name ? 1 : b.type.name > a.type.name ? -1 : 0
      );
      setNotificationsList(sortedNotifications);
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
          <title>Notificaciones | Sweet Home</title>
        </Head>
        <div className="container">
          <h1 className={global.title}>Notificaciones</h1>
          <div className="filter__list">
            <select
              name="filters"
              onChange={(e) => sortByFilters(e.target.value)}
            >
              <option default value="default">
                Selecciona un filtro
              </option>
              <option value="type">Ordenar por tipo</option>
            </select>
          </div>
          {notificationsList?.length === 0 && (
            <div>
              <p className={global.loading2}>No tiene ninguna notificación.</p>
            </div>
          )}
          {notificationsList
            .sort((a, b) => {
              if (a.createdAt > b.createdAt) {
                return 1;
              }
              if (a.createdAt < b.createdAt) {
                return -1;
              }
              return 0;
            })
            .map(
              ({
                _id,
                sender,
                receiver,
                type,
                description,
                isChecked,
                createdAt,
              }) => {
                return (
                  <>
                    <Notification
                      key={_id}
                      id={_id}
                      sender={sender}
                      receiver={receiver}
                      type={type}
                      description={description}
                      isChecked={isChecked}
                      createdAt={createdAt}
                    />
                  </>
                );
              }
            )}
        </div>
        <style jsx>{`

        .filter__list{

        /*Box model*/

        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: flex-end;
        margin-bottom: 2rem;

        }

        select{

          /*Box model*/

          width: 10vw;
          height: 2rem;
          align-self: flex-end;

          /*Text*/

          font-family: ${fonts.default};
          color: ${colors.secondary};
          font-size: 0.8rem;

          /*Visuals*/

          border-radius: 20px;
          border: none;
          background-color: ${colors.primary};
          box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);

          }

          select:focus{

          /*Visuals*/

          border: 2px solid #4d97f7;
          outline: none;
          box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

          }

          select::part(listbox){

            /*Visuals*/

            border-radius: 20px;
          }


        
        h1{
                        /*Text*/

                        font-size: 3.5rem;
                        font-weight: 600;
                        background-color: ${colors.primary};
                        font-family: "Archivo Black", sans-serif;
                        background-image: linear-gradient(45deg, #f0810f, #ffe45c);
                        background-repeat: repeat;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent; 
                        background-size: 100%
                        text-align: center;
                        
                  }
        
        `}</style>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <>
          <div className={global.content}>
            <div className="message">
              <h1 className={global.title7}>
                Para acceder a esta página debe iniciar sesión como usuario
                básico de la aplicación
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
        </>
      </Layout>
    );
  }
}

export async function getServerSideProps(context) {


  const notification = await fetch(
    `${server}/api/notifications/${context.query.username}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const notifications = await notification.json();

  return {
    props: { notifications: JSON.parse(JSON.stringify(notifications)) },
  };
}
