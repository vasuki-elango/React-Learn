import React, { useReducer } from 'react'

const Initalstate = 0;
function reduce(state,action){
    switch (action) {
        case 'Increament':
            return state=state+1
           
        case 'Decreament':
            return state-=1
           
        case 'Reset':
            return state =0
           
        default:
            return state =0
    }
}

export const UseReducer = () => {
    const[count,dispatch] = useReducer(reduce,Initalstate)
  return (
    <div>
        {count}<br/>
        <button onClick={()=>dispatch('Increament')}>Increament</button>
        <button  onClick={()=>dispatch('Decreament')}>Decreament</button>
        <button  onClick={()=>dispatch('Reset')}>Reset</button>
    </div>
  )
}
