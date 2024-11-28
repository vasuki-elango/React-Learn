import React, { useContext } from 'react'
import {UserContext,channelContext} from './ComponentC'

export const ComponentA = () => {
    const data = useContext(UserContext)
    const channer = useContext(channelContext)
  return (
    <div>
        {data}<br></br>
        {channer}
    </div>
  )
}
