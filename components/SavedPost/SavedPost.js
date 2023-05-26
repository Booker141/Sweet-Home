/* Static imports */

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import {server} from '/server'

/* Dynamic imports */

const LazyLoad = dynamic(() => import('react-lazyload'))
const Post = dynamic(() => import('/components/Post/Post'))



export default function SavedPost (props) {

  const [saved, setSaved] = useState({})


  console.log(props)


  const getPost = async() => {

    const res = await fetch(`${server}/api/postsById/${props.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const data = await res.json()

    console.log(data)

    setSaved(data)

  }


  useEffect(() => {
    getPost()
  }, [saved])



  return (
    <>
      <Post key={saved._id} id={saved._id} username={saved.username} location={saved.location} image={saved.image} description={saved.description} createdAt={saved.createdAt} comments={saved.comments} likes={saved.likes} saves={saved.saves} type={saved.type} />
    </>

  )
}
