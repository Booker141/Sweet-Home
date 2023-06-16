/* Static imports */

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { server } from "../../server";

/* Dynamic imports */

const LazyLoad = dynamic(() => import("react-lazyload"));
const Post = dynamic(() => import("/components/Post/Post"));

/** 
  * @author Sergio García Navarro
  * @returns Saved post component
  * @version 1.0
  * @description Saved post component
*/

/**
 * This function is a saved post component that receive props from page and displays them
 * in a post format saved by user
 * @param props - props received from page.
 * @returns A post saved by user.
 */
export default function SavedPost(props) {
  const [saved, setSaved] = useState({});

  const getPost = async () => {
    const res = await fetch(`${server}/api/postsById/${props?.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    setSaved(data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      {saved && (
        <Post
          key={saved._id}
          id={saved._id}
          username={saved.username}
          location={saved.location}
          image={saved.image}
          description={saved.description}
          createdAt={saved.createdAt}
          comments={saved.comments}
          likes={saved.likes}
          saves={saved.saves}
          type={saved.type}
        />
      )}
    </>
  );
}
