import { useState, useEffect } from 'react'
import Image from 'next/image'
import global from 'styles/global.module.css'

export default function Follower (props) {

  const [user, setUser] = useState({})

  /**
   * This function is an asynchronous function that fetches the user's followers from the database and
   * sets the state of the user to the followers
   */
  async function getFollowers(){

    const res = await fetch(`http://localhost:3000/api/users/${props.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    const follower = await res.json()
    setUser(follower)

  }
  
  /* A hook that is used to fetch data from the server. */
  useEffect(() => {
    getFollowers()
  }, [])

  return (
    <>
      <div className='follower'>
        <div className='follower__image'>
          <Image src={follower.image} />
        </div>
        <div className='follower__info'>
          <p className={global.text}>{follower.username}</p>
        </div>
      </div>
      <style jsx>{`
                .follower{
                    /*Box model*/   

                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    margin: 0.5rem 0;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid #eaeaea;
                }

                .follower__image{
                    /*Box model*/

                    width: 2rem;
                    height: 2rem;
                    margin-right: 0.5rem;
                }

                .follower__info{
                    /*Box model*/

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                }
            `}
      </style>
    </>

  )
}
