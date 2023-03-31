import { useState, useEffect } from 'react'
import Image from 'next/image'
import global from 'styles/global.module.css'

export default function Following (props) {

  const [user, setUser] = useState({})

  async function getFollowing(){

    const res = await fetch(`http://localhost:3000/api/users/${props.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    const following = await res.json()
    setUser(following)

  }
  /* A hook that is used to fetch data from the server. */
  useEffect(() => {
    getFollowing()
  }, [])

  return (
    <>
      <div className='following'>
        <div className='following__image'>
          <Image src={following.image} />
        </div>
        <div className='following__info'>
          <p className={global.text}>{following.username}</p>
        </div>
      </div>
      <style jsx>{`
                .following{
                    /*Box model*/   

                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    margin: 0.5rem 0;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid #eaeaea;
                }

                .following__image{
                    /*Box model*/

                    width: 2rem;
                    height: 2rem;
                    margin-right: 0.5rem;
                }

                .following__info{
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
