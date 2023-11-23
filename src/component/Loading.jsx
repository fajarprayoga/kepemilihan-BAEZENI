import { CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
    return (
        <div className='h-screen  items-center flex justify-center' >
            <CircularProgress />
        </div>
    )
}

export default Loading