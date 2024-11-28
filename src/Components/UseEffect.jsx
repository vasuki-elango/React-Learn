import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
    const[name,setName]=useState("Riya");
    const[age,setAge]=useState(12);

    let [x,setX] = useState()
    let [y,setY] = useState()
    useEffect(()=>{
        console.log("Running");
        document.title=`${name}`
        
    },[name])

    const logMouse = (e) =>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("Mouse moving")
        window.addEventListener('mousemove',logMouse)

        return () => {
            console.log("clear");
            window.removeEventListener('mousemove',logMouse)
        }        
    },[])
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <button>Toggle</button>
        <p>{x}-{y}</p>
    </div>
  )
}
