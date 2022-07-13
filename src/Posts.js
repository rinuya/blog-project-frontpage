import React, { useEffect, useState } from "react";
import PostList from "./PostList";

function Posts() {

  const [dataReceived, setDataReceived] = useState(false);

  const [data, setData] = useState({});

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts () {
    try{
      let response = await fetch("https://shrouded-wave-21751.herokuapp.com/public/posts");
      response = await response.json();
      setData(response);
      setDataReceived(true)
    }
    catch (error) {
        console.error(error);
    }
  }

  if (dataReceived) {
    return (
        <div className="bg-base-300 h-full neutral-content w-full flex flex-col items-center pt-5">
            <PostList posts={data.posts} />
        </div>
    )
  }
  else {
    return(
        <div className="bg-base-300 h-full neutral-content w-full flex flex-col items-center">
            <div className="mt-4">
            </div>
            <p>Loading posts...</p>
        </div>
    );
  }
}
  
  export default Posts;
  