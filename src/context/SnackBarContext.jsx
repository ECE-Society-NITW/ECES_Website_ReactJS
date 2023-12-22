import React, { createContext, useContext, useState } from 'react'
const SnackBarContext = createContext()

const SnackBarState = ({ children }) => {

    const [snackBarState, setSnackBarState] = useState(false)
    const [snackBarSeverity, setSnackBarSeverity] = useState('success')
    const [snackBarMessage, setSnackBarMessage] = useState('This is a success message!')

    return (
        <SnackBarContext.Provider value={
            {
                snackBarState,
                setSnackBarState,
                snackBarSeverity,
                setSnackBarSeverity,
                snackBarMessage,
                setSnackBarMessage
            }}>
            {children}
        </SnackBarContext.Provider>
    )
}

const useContextSnackBar = () => useContext(SnackBarContext)

export { SnackBarState, useContextSnackBar }
