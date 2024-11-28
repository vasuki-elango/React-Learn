import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const UseEffectFetch = () => {
    const[id,setId]=useState(1);
    
    const[post,setPost]=useState([])
    const[buttonfrom,setButtonform]=useState()
    useEffect( ()=>{
       axios
       .get(`https://jsonplaceholder.typicode.com/posts/${buttonfrom}`)
       .then((res)=>{
        setPost(res.data)

       })
       .catch(err =>{
        console.log(err); 
       })
    },[buttonfrom])

function getMe(){
  setButtonform(id)
}

  return (
    <div>
      <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
      <button onClick={getMe}>Get</button>
      <ul>
        {/* {
          post.map(posts =>{
            return <li key={posts.id}>{posts.title}</li>
          })
        } */}
  {post.title}
       
      </ul>
    </div>
  )
}
