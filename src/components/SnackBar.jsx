import { Snackbar, Alert } from '@mui/material'
import React from 'react'
import { useContextSnackBar } from '../context/SnackBarContext'

const SnackBar = () => {

    const {
        snackBarState,
        setSnackBarState,
        snackBarSeverity,
        snackBarMessage,
    } = useContextSnackBar()

    const handleClose = () => {
        setSnackBarState(false)
    }

    return (
        <Snackbar
            open={snackBarState}
            autoHideDuration={1000}
            onClose={handleClose}
            anchorOrigin={{
                vertical:'top',
                //  { xs: 'top', md: 'bottom' },
                horizontal:'center'
                //  {xs:'center',md:'left'}
            }}>
            <Alert onClose={handleClose} severity={snackBarSeverity} sx={{ width: '100%' }}>
                {snackBarMessage}
            </Alert>
        </Snackbar>
    )
}

export default SnackBar
