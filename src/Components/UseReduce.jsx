import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

const InitialState = {
    err:"",
    post:{},
    loading:true
}

function reduce(state,action){
    switch (action.type) {
        case 'Success':
            return{
                post:action.payload,
                err:"",
                loading:false
            }
        case 'Error':
            return{
                post:{},
                err:"Somethhing Wrong",
                loading:false
            }
        default :
            return state
    }
}

export const UseReduce = () => {
    const [content,dispatch] = useReducer(reduce,InitialState)
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res =>{
           dispatch({
                type:'Success',
                payload:res.data
           })
        })
        .catch(err =>{
            dispatch({
                type:'Error',
           })
            
        })
    },[])
  return (
    <>
        {content.loading ? "Loading" : content.post.title}
        {content.err?content.err:content.err}
    </>
  )
}
