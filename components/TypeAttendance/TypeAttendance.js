import { useRouter } from 'next/router'
import global from 'styles/global.module.css'
import { colors } from 'styles/frontend-conf'

export default function TypeAttendance (props) {
  const router = useRouter()

  return (
    <>
      <div className={global.typeAttendance}>
        <h1 className={global.tertiary}>{props.name}</h1>
        <hr className={global.white__line2} />
        <p className={global.text}>{props.description}</p>
        <button className={global.buttonTertiary} onClick={() => router.push(`/attendances/${props.urlName}`)} aria-label={'Ir a ' + `${props.url}`}>Entrar</button>
      </div>
      <style jsx>{`



                h1{

                    /*Box model*/

                    margin-right: 2rem;
                    margin-left: 2rem;
                    margin-top: 2rem;
                    margin-bottom: 2rem;

                    /*Text*/

                    font-size: 1.4rem;
                    font-weight: 600;

                }

                p{

                    /*Box model*/

                    margin-right: 2rem;
                    padding: 2rem;
                }

                button{

                    /*Box model*/

                    margin-left: 2rem;
                    margin-bottom: 2rem;
                    margin-top: 1rem;
                }

    
                a:hover{

                    /*Text*/

                    color: ${colors.tertiary};
                    
                    /*Visuals*/

                    transition: 0.3s ease all;
                }
            
            
            `}
      </style>
    </>
  )
}
