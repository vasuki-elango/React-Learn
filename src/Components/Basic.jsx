import React from 'react'

export const Basic= (props) => {
    const titleName = "title"
    const persons=["Riya","Nilan","Jack"]
    const list = persons.map((person,index)=>{
      return <p key={index}>{person}</p>
    })
    const stylesmodules={
      color:"Red",
      backgroundColor:"Black",
      textalign:"center"
    }
    const Mode=true;
  return (
    <>
      <div>
        <h2 className={titleName}>Props:</h2>
        <p>{props.users.name} {props.depart}</p>
        {
          props.users.skills.map((skill,index)=>{
            return <p key={index}>{skill}</p>
          })
        }
        <p>{props.children}</p>
      </div>
    <hr/>
      <div>
        <h2>List Rendering:</h2>
        {list}
      </div>
    <hr/>
      <div>
        <h2>Styling:</h2>
        <h3 style={{color:"pink"}}>Inline Style</h3>
        <h2 style={stylesmodules}>CSS Modules</h2>
        <h4>Imported</h4>
      </div>
    <hr />
    <div>
      <h2>Conditional Rendering:</h2>
      <p>{Mode ? "online" : " offline"}</p>
    </div>
    <hr />
    <div>
      <h2>Event Handling:</h2>
      <button onClick={()=>alert('Hello Vasuki!')}>Click Me</button>
    </div>
    </>
  )
}

