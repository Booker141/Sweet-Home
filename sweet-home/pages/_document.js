import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
            <meta name="keywords" content="adopción, animal, web developing, social network"></meta>
            <meta name="description" content="Red social sobre la adopción animal"></meta>
            <meta name="author" content="Sergio García Navarro"></meta>
            <meta name="designer" content="Sergio García Navarro"></meta>
            <link rel="icon" href="/Icono.ico"/>
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument