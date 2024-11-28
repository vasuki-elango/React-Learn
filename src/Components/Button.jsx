import React from 'react'

const Button = ({text,Increament}) => {
    console.log(`Rendering Button - ${text}`);
  return (
    <div>
        <button onClick={()=>Increament()}>Increament {text}</button>
    </div>
  )
}

export default React.memo(Button)