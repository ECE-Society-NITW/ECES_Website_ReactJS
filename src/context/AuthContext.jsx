import React, { createContext, useContext, useState, useEffect } from 'react'
import NodeJS from '../utils/NodeJS'
const AuthContext = createContext()

const AuthState = ({ children }) => {
    
    const [JWT, setJWT] = useState('')
    const [user,setUser] = useState({})

    useEffect(() => {
        const credential = localStorage.getItem('jwt')
        if (credential){
            setJWT(credential)
            NodeJS.POST('/api/users',{credential})
                  .then((data)=>setUser(data))
                  .catch((err)=>console.log(err))
        }
    }, [JWT])

    return (
        <AuthContext.Provider value={{ JWT, setJWT, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

const useContextAuth = () => useContext(AuthContext)

export { AuthState, useContextAuth }
