import React, { useMemo, useState } from 'react'

export const UseMemo = () => {
  const[counterOne,setCounterone] = useState(0)
  const[counterTwo,setCountertwo] = useState(0)
    
  const counterOnehandle = () =>{
    setCounterone(counterOne+1)
  }
  const counterTwohandle = () =>{
    setCountertwo(counterTwo+1)
  }
  const calcu=useMemo(()=>{
    var i=0
    while ( i<500000000) {
      i++;
    }
    return counterOne%2===0
  },[counterOne])
  return (
    <div>
        <button onClick={()=>counterOnehandle()} >Count {counterOne}</button>
        {calcu ? "even":"odd"}
        <button onClick={()=>counterTwohandle()}>Count {counterTwo}</button>
    </div>
  )
}
