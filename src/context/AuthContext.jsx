import React, { createContext, useContext, useState, useEffect } from 'react'
const AuthContext = createContext()

const AuthState = ({ children }) => {
    
    const [JWT, setJWT] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if (token){
            setJWT(token)
        }
    }, [JWT])

    return (
        <AuthContext.Provider value={{ JWT, setJWT }}>
            {children}
        </AuthContext.Provider>
    )
}

const useContextAuth = () => useContext(AuthContext)

export { AuthState, useContextAuth }
