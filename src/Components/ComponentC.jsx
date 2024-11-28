import React, { createContext } from 'react'
import { ComponentA } from './ComponentA'

export const UserContext = createContext()
export const channelContext = createContext()

export const ComponentC = () => {
  return (
    <div>
        <UserContext.Provider value={'vasuki'}>
            <channelContext.Provider value={'riya'}>

            component C
            <ComponentA/>
            </channelContext.Provider>
        </UserContext.Provider>
    </div>
  )
}
