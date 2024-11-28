import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export const Form = () => {
    const [name,setName] = useState([
        
    ])
    const NameRef = useRef()

    
  return (
    <div>
        <form action="/">
            <input type="text" value={name} ref={NameRef}/>
            <input type="submit" value='Submit' onClick={()=>setName(NameRef.current.value)}  />
        </form>
        <h3>Name:{name}</h3>
        
        </div>
  )
}
