import React, { createContext, useContext, useEffect } from 'react'
import { useColorScheme } from '@mui/material'
const ModeContext = createContext()

const ModeState = ({ children }) => {

    const { mode, setMode } = useColorScheme()

    useEffect(()=>{
        setMode('dark')
    },[])

    return (
        <ModeContext.Provider value={{mode,setMode}}>
            {children}
        </ModeContext.Provider>
    )
}

const useContextMode = () => useContext(ModeContext)

export { ModeState, useContextMode }
