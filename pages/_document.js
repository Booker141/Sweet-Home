import Document, { Html, Head, Main, NextScript } from 'next/document'

/* It's a class that extends the Document class from Next.js and it's used to add custom properties to
the HTML document */
class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='es'>
        <Head>
          <meta name='keywords' content='adopción, animal, web developing, social network' />
          <meta name='description' content='Red social sobre la adopción animal' />
          <meta name='author' content='Sergio García Navarro' />
          <meta name='designer' content='Sergio García Navarro' />
          <link rel='icon' href='/Icono.ico' />
          <link
            rel='preload'
            href='/fonts/Poppins/Poppins-Regular.ttf'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/Poppins/Poppins-Black.ttf'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/Raleway/Raleway-VariableFont_wght.ttf'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/Satisfy/Satisfy-Regular.ttf'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
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
