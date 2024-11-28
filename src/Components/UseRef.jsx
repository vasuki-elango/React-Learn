import React, { useRef, useState } from 'react'

export const UseRef = () => {
  const [name,setName] = useState()
  const inputRef = useRef(null)
  return (
    <div>
      <input type="text" ref={inputRef} value={name} 
      onChange={(e)=>setName(e.target.value)} 
      onClick={()=>inputRef.current.focus()}
      />
      {name}
    </div>
  )
}
