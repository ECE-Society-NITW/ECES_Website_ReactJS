import React from 'react'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { useContextAuth } from '../context/AuthContext'
import { Button } from '@mui/material'
import { Logout } from '@mui/icons-material'

const GoogleAuth = () => {

    const {JWT,setJWT} = useContextAuth()

    const handleSuccess = ({credential}) => {
        localStorage.setItem('jwt',credential)
        setJWT(credential)
    }

    const handleFailure = ()=>{
        window.alert("Error logging in!")
    }

    const handleLogout = ()=>{
        localStorage.removeItem('jwt')
        setJWT('')
        googleLogout()
        window.location.reload()
    }

    return (
        <div>
            {!JWT && <GoogleLogin
                onSuccess={handleSuccess}
                onError={handleFailure}
                useOneTap
            />}
            {JWT && <Button onClick={handleLogout}>Logout <Logout/></Button>}
        </div>
    )
}

export default GoogleAuth
