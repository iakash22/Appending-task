import React from 'react'
import { FiLoader } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <div
            className='h-screen bg-gradient-to-r from-[#fff5bc] to-[#cec1ff] flex flex-col items-center
                    justify-center p-[2vmax] box-border lg:text-5xl md:text-3xl sm:text-2xl text-neutral-600 gap-5'
        >
            Forgot Password Under Maintance 
            <FiLoader
                className=' animate-spin text-blue-500 lg:mb-10'
            />

            <button
                className='font-roboto btn max-sm:text-[10px] max-sm:w-min max-sm:px-2 '
                onClick={() => navigate('/')}
            >
                <span className='max-sm:text-[10px]'>Back Login</span>
            </button>
        </div>
    )
}

export default ForgotPassword
