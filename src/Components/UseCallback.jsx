import React, { useCallback, useState } from 'react'
import Button from './Button'
import Content from './Content'

export const UseCallback = () => {
    const [age,setAge]=useState(20)
    const [Salary,setSalary]=useState(2000)
    const IncreamentAge  = useCallback(()=>{
        setAge(age+1)

    },[age])
    const IncreamentSalary = useCallback(()=>{
        setSalary(Salary+2000)

    },[Salary])
  return (
    <div>
        <Content count={age} text={"Age"}/>
        <Button text={"Age"} Increament={IncreamentAge}/>
        <Content count={Salary} text={"Salary"}/>
        <Button text={"Salary"} Increament={IncreamentSalary}/>
    </div>
  )
}
