import global from 'styles/global.module.css'
import { colors, fonts } from 'styles/frontend-conf.js'
import { MdDeleteOutline, MdOutlineEdit, MdClose} from 'react-icons/md'
import { HiOutlineClock } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import { server } from 'server'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import Router from 'next/router'


/**
 * It's a function that returns a div with a title, a date, an author, an introduction, a body and a
 * conclusion
 * @param props - The props that are passed to the component.
 * @returns A component that shows a new.
 */
export default function New (props) {

  const { data: session } = useSession();
  const [isAdmin, setIsAdmin] = useState(false);


  /* It's checking if the user is an admin. */
  useEffect(() => {
    if (session) {
      getRole()
    }
  }, []);

  const getRole = async () =>
  {

    const res = await fetch(`${server}/api/users/${session.user.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await res.json();
    if(data.role.name === 'administrador')
    {
      setIsAdmin(true)
    }
  }
  

  return (
    <>

      <div key={props._id} className={global.new}>
        <article key={props.id}>
          <div className="new__header">
            <h2 className={"new__title"}>{props.title}</h2>
            
          </div>
          <hr className={global.white__line}></hr>
          <div className="new__time">
            <HiOutlineClock size={17}/>
            <h3 className={global.date}>Publicada el {new Date(props.date).toLocaleDateString().slice(0,10)}</h3>
          </div> 
          <h3 className={global.tertiary__bold}>{props.author}</h3>
          <p className={global.text}>{props.introduction}</p>
          <p className={global.text}>{props.body}</p>
          <p className={global.text}>{props.conclusion}</p>
        </article>
      </div>
      
      <style jsx>{`

                
                .buttons{


                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                }

                .new__time{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.5rem;

                }

             

                .new__title{

                  /*Text*/

                  font-size: 2rem;
                  font-weight: 600;
                  font-family: ${fonts.default};
                }

                .new__header{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
                .text{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

               

                p{
                    white-space: pre-wrap;
                }

                hr{

                    /*Box model*/

                    width: 100%;
                    margin-bottom: 3rem;
                }



            
            `}
      </style>

    </>

  )
}
