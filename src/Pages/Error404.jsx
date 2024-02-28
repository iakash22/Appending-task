import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
    const navigate = useNavigate();
    return (
        <div
            className='h-screen bg-gradient-to-r from-[#fff5bc] to-[#cec1ff] flex flex-col items-center
                        justify-center p-[2vmax] box-border md:text-5xl text-2xl font-roboto font-bold'
        >
            404 Not Found

            <Button
                sx={{ marginTop: "3rem" }}
                size='large'
                color='primary'
                onClick={() => navigate(-1)}
            >
                Back
            </Button>
        </div>
    )
}

export default Error404
