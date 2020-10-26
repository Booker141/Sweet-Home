import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <div>
      <Header />
      <Layout>
        <Head>
          <title>Sweet Home</title>
          <Link rel="icon" href="/Icono.ico" />
          <img src="/LogoWeb.png" alt="Logo de la página"></img>
        </Head>
      </Layout>
      <Footer />
    </div>
  )
}
