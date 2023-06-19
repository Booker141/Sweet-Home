/* Static imports */

import { useSession, signIn } from "next-auth/react";
import { colors, fonts } from "styles/frontend-conf";
import { useState } from "react";
import { server } from "/server";
import global from "styles/global.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

/*Dynamic imports*/

const Loader = dynamic(() => import("/components/Loader/Loader"));
const Layout = dynamic(() => import("/components/Layout/Layout"));
const User = dynamic(() => import("/components/UserCard/UserCard"));
const LazyLoad = dynamic(() => import("react-lazyload"));

/**
 * @author Sergio García Navarro
 * @returns All vets page
 * @version 1.0
 * @description All vets page
 */

export default function AllVets({ users }) {
  const { data: session, status } = useSession({ required: true });

  const [isSortedByUsername, setIsSortedByUsername] = useState(false);
  const [usersList, setUsersList] = useState(users);

  const sortByFilters = (e) => {
    if (e === "username") {
      setIsSortedByUsername(!isSortedByUsername);
      const sortedUsers = users?.sort((a, b) =>
        a.username > b.username ? 1 : b.username > a.username ? -1 : 0
      );
      setUsersList(sortedUsers);
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
          <title>Veterinarias | Sweet Home</title>
        </Head>
        <h1 className="title">Veterinarias</h1>
        <p className={global.text}>Aquí encontrarás todas las clínicas veterinarias que se han registrado en la aplicación:</p>
        <div className="column1__buttons">
          <div className="filter__list">
            <select
              name="filters"
              onChange={(e) => sortByFilters(e.target.value)}
            >
              <option default value="default">
                Selecciona un filtro
              </option>
              <option value="username">Ordenar por nombre de usuario</option>
            </select>
          </div>
        </div>
        <div className="users">
          {usersList?.length === 0 && (
            <div>
              <p className={global.loading2}>No hay ninguna veterinaria.</p>
            </div>
          )}
          {usersList
            .filter(
              (user) =>
                user?.username !== session?.user.username &&
                user?.status.name != "bloqueado"
            )
            .map(({ _id, image, banner, username, role }) => {
              return (
                <>
                  <LazyLoad offset={300}>
                    <User
                      key={_id}
                      image={image}
                      banner={banner}
                      username={username}
                      role={role}
                    />
                  </LazyLoad>
                </>
              );
            })}
        </div>
        <style jsx>{`

          .users{

          /*Box model*/

          display: flex;
          flex-direction: row;
          gap: 2rem;
          flex-wrap: wrap;


          }

          .column1__buttons{

/*Box model*/

display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 2rem;


}

.column1__buttons button{

/*Box model*/

margin-right: 1rem;

}

.filter__list{

/*Box model*/

display: flex;
flex-direction: row;
align-items: center;
align-self: flex-end;

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

      
          .title{

            /*Text*/

            font-size: 3.5rem;
                        font-weight: 600;
                        background-color: ${colors.primary};
                        font-family: "Archivo Black", sans-serif;
                        background-image: linear-gradient(180deg, #f0810f, #ffe45c 170%);
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
        </>
      </Layout>
    );
  }
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const res2 = await fetch(`${server}/api/vets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const users = await res2.json();

  return {
    props: { users: JSON.parse(JSON.stringify(users)) },
  };
}
