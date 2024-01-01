import React, { createContext, useContext, useState, useEffect } from 'react'
import NodeJS from '../utils/NodeJS'
const AuthContext = createContext()

const AuthState = ({ children }) => {
    
    const [JWT, setJWT] = useState('')
    const [user,setUser] = useState({})
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const credential = localStorage.getItem('jwt')
        if (credential){
            setJWT(credential)
            NodeJS.POST('/api/users',{credential})
                  .then((data)=>setUser(data) && setLoading(false))
                  .catch((err)=>console.log(err))
        } else {
            setLoading(false);
        }
    }, [JWT])

    return (
        <AuthContext.Provider value={{ JWT, setJWT, user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

const useContextAuth = () => useContext(AuthContext)

export { AuthState, useContextAuth }
