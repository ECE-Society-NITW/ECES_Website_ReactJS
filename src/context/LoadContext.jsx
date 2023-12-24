import React, { createContext, useContext, useState } from 'react'
const LoadContext = createContext()

const LoadState = ({ children }) => {

    const [loading,setLoading] = useState(false)

    return (
        <LoadContext.Provider value={{loading,setLoading}}>
            {children}
        </LoadContext.Provider>
    )
}
const useContextLoad = () => useContext(LoadContext)

export { LoadState, useContextLoad }
