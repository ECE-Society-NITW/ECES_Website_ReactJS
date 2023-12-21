import React from 'react'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { useContextAuth } from '../context/AuthContext'
import { Button } from '@mui/material'
import { Logout } from '@mui/icons-material'
import NodeJS from '../utils/NodeJS'

const GoogleAuth = () => {

    const { JWT, setJWT, setUser } = useContextAuth() //import user if required

    const handleSuccess = ({ credential }) => {
        localStorage.setItem('jwt', credential)
        setJWT(credential)
        NodeJS.POST('/api/users', { credential })
            .then((data) => {
                setUser(data)
            })
            .catch(err => console.log(err))
    }

    const handleFailure = () => {
        window.alert("Error logging in!")
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt')
        setJWT('')
        googleLogout()
        setUser({})
        window.location.reload()
    }

    return (
        <div >
            {!JWT && <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleFailure}
                useOneTap
            />}
            {JWT && <Button onClick={handleLogout}>Logout <Logout /></Button>}
        </div>
    )
}

export default GoogleAuth
