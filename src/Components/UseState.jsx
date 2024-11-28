import React, { useState } from 'react'

export const UseState = () => {
  const [count,setCount] = useState(0)
  //object update
    const[name,setName] = useState({firstName:"vasuki",lastName:"elango"})
    //array update
    const[num,setNum] = useState([{
      id:0,
      value:6
    }])
    function addNum(){
      setNum([...num,
        {
          id:num.length,
          value:Math.floor(Math.random()*10+1)
        }
      ])
    }
  return (
    <>
    <input onChange={(e)=>setName({...name,firstName:e.target.value})}  value={name.firstName}type="text" />
    <input onChange={(e)=>setName({...name,lastName:e.target.value})} value={name.lastName} type="text" />
    <h3>firstName: {name.firstName} <br/>LastName: {name.lastName}!</h3>
    {JSON.stringify(name)}<hr/>
    <button onClick={addNum}>Add 1</button>
    {
      num.map((nums,id)=>{
        return <span key={num.id}> {nums.value}</span>
      })
    }
    <hr/>
    {/* previous state use */}
    <button onClick={(e)=>setCount(count+5)} >Increament</button> {count}
    </>
  )
}