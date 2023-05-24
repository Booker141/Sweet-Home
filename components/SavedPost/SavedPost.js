/* Static imports */

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

/* Dynamic imports */

const LazyLoad = dynamic(() => import('react-lazyload'))
const Post = dynamic(() => import('/components/Post/Post'))



export default function SavedPost (props) {

  const [savedPost, setSavedPost] = useState({})


  async function getPost(){

    const res = await fetch(`http://localhost:3000/api/postsById/${props.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

    const data = await res.json()

    setSavedPost(data)


  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      <LazyLoad offset={100}>
        <Post key={savedPost._id} id={savedPost._id} username={savedPost.username} location={savedPost.location} image={savedPost.image} description={savedPost.description} createdAt={savedPost.createdAt} comments={savedPost.comments} likes={savedPost.likes} saves={savedPost.saves} type={savedPost.type} />
      </LazyLoad>
   </>

  )
}
