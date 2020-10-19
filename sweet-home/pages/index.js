import Head from 'next/head'
import styles from '../styles/HomeStyle.css'
import link from 'next/link'

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Sweet Home</title>
        <link rel="icon" href="/Icono.ico" />
      </Head>

      <header className={styles.header}>
        <link>
          <img src='../public/LogoWeb.png'></img>
        </link>
        <link>Inicio</link>
        <link>Contacto</link>
        <link>¿Quiénes somos?</link>
        <link href='/Login'>Iniciar sesión</link>
      </header>

      <body>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
        
            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </body>

      <footer className={styles.footer}>
        <a>
          Información
        </a>
        <a>
          Privacidad
        </a>
        <a>
          Condiciones
        </a>
        <a>
          Idioma
        </a>
      </footer>
    </div>
  )
}
