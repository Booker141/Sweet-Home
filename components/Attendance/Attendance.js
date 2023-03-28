import global from '/styles/global.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'



/**
 * It fetches the user's data from the database and displays it in the attendance component
 * @param props - {
 * @returns An object with the following properties:
 */
export default function Attendance (props) {

  const [user, setUser] = useState({});

  /* Fetching the user's data from the database and displaying it in the attendance component. */
  useEffect(async () => {
    const res = await fetch(`${server}/api/users/${props.username}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        }
      })
      const data = await res.json();
      setUser(data);
  }, [])

  return (
    <>
      <div className="attendance">
        <div className="attendance__user">
          <Image src={user.image} width={20} height={20} />
          <a href={`${server}/profile/${user.username}`} className={global.text2__bold}>{props.username}</a>
          <p>{props.location}</p>
          <p>{props.createdAt}</p>
        </div>
        <div className="attendance__animal">
          <p>{props.animal}</p>
          <p>{props.breed}</p>
        </div>
        <div className="attendance__description">
          <p>{props.description}</p>
        </div>
        <div className="attendance__image">
          <Image src={props.image} width={200} height={200} />
        </div>
        <div className="attendance__comments">
          <p>{props.comments}</p>
        </div>
      </div>
    </>
  )
}
