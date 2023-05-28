/* Static imports */

import { colors } from 'styles/frontend-conf'
import { useState, useEffect } from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { MdHealthAndSafety } from 'react-icons/md'
import {useSession} from 'next-auth/react'
import global from 'styles/global.module.css'
import dynamic from 'next/dynamic'

/*Dynamic imports*/

const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))
const LazyLoad = dynamic(() => import('react-lazyload'))



export default function UserSidebar (props) {

  const {data: session} = useSession()
  
  const [isShelter, setIsShelter] = useState(false)
  const [isVet, setIsVet] = useState(false)



  const calcCreated = () => {

    const date = new Date(props?.createdAt)

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  

  useEffect(() => {
    if(props?.role.name ===  "protectora")
      setIsShelter(true)
    else if(props?.role.name === "veterinaria")
      setIsVet(true)

  }, [])

  return (
    <>

      <a key={props._id} href={`/profile/${props?.username}`} className={global.user__sidebar}>
        <div className='user__image'>
          <FallbackImage src={props?.image} style={{ borderRadius: '50px' }} alt='Imagen de usuario' width={40} height={40} />
        </div>
        <div className="user__text">
            <div className='user__username'>
            <strong>@{props?.username}</strong>
            {isShelter && <BsPatchCheckFill size={15} color={colors.secondary}/>}{isVet && <MdHealthAndSafety size={20} color={colors.secondary}/>}
            </div>
            <p className={global?.sidebar__date}>Se unió el {calcCreated(props?.createdAt)}</p>
        </div>
      </a>
      <style jsx>{`


                .user__image{

                    /*Box model*/

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 0.2rem;

                    /*Visuals*/

                    border-radius: 70px;
                }

                .user__text{

                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    width: fit-content;


                }
                .user__username{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    width: fit-content;
                    gap: 0.5rem;

                    /*Text*/

                    color: #fafafa;

                }


                .user__image a {

                  /*Visuals*/

                  text-decoration: none;
                  width: 50px;
                  height: 50px;

                }

                a{

                    /*Visuals*/

                    text-decoration: none;
                }


            
            `}
      </style>

    </>

  )
}