import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (

    <Layout>

      <Head>
        <title>Sweet Home</title>
        <Link rel="icon" href="/Icono.ico" />
      </Head>

    </Layout>

  )
}
