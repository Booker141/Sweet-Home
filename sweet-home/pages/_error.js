import {colors} from '/styles/frontend-conf.js'
import {fonts} from '/styles/frontend-conf.js'
import {MdPets} from 'react-icons/md'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import urlImage from '/public/PerroError.png'
import Button from '/components/Button/Button'


function Error({ statusCode }) {
    const router = useRouter();
  
    return (
      <>
        <Head>
          <title>Error {statusCode}</title>
        </Head>

          <Button className="button" size='10vw' onClick={() => router.back()}>Volver</Button>
          <div className="error">
            <div className="first-line">
              <MdPets size={35} color={colors.primary} />

              <h1 className="text">
                Vaya... ha ocurrido un error {statusCode}
              </h1>
              <MdPets size={35} color={colors.primary}/>
            </div>
  
            <h2>Contacte con nuestro departamento de IT</h2>
            <Image src={urlImage} width="350" height="400"/>
          </div>

        <style jsx>{`
          .button{
            
          }
          .text{
            margin: 1.5rem;
          }
          .first-line{
            display: flex;
            flex-direction: row;
            align-items: center; 
            justify-content: center; 
          }
          .error {
            display: block;
            margin: auto;
            text-align: center;
            height: 50%;

          }
          h1{
            font-size: 2.5rem;
            font-family: ${fonts.default};
            color: ${colors.primary};
            text-align: center;
            height: 50%;
          }

          h2{ 
            font-size: 1rem;
            font-family: ${fonts.default};
            color: ${colors.primary};
            text-align: center;
            height: 50%;
          }
          
          
        `}</style>
      </>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error