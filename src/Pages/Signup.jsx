import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Services';
import toast from 'react-hot-toast';

const initialData = {
    fullName: "",
    email: "",
    password: "",
    isAuthenticate: false,
};

const Signup = () => {
    const [data, setData] = useState(initialData);
    const { loading } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const sumbitHandler = async(event) => {
        event.preventDefault();

        await dispatch(registerUser(data));
        setData(initialData);
    }

    return (
        <div className='h-screen bg-gradient-to-r from-[#fff5bc] to-[#cec1ff] flex items-center
        justify-center p-[2vmax] box-border'
        >
            <form className='bg-[#fff] h-full w-1/2 max-sm:w-full rounded-[30px] box-border p-[2vmax] flex flex-col
            items-center '
                onSubmit={sumbitHandler}
            >
                <h3 className='p-[3vmax] text-2xl font-semibold'>Appening Task App</h3>
                <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={data.fullName}
                    onChange={changeHandler}
                    required
                    placeholder='Enter your name'
                    className='px-[2vmax] max-sm:px-[8vw] py-[1vmax] max-sm:py-[4vw] w-[80%] rounded-[40px] border border-[#ccc] 
                font-roboto font-thin text-[1.2rem] m-[2vmax] max-sm:m-[2vw]'
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={changeHandler}
                    required
                    placeholder='Enter your email'
                    className='px-[2vmax] max-sm:px-[8vw] py-[1vmax] max-sm:py-[4vw] w-[80%] rounded-[40px] border border-[#ccc] 
                font-roboto font-thin text-[1.2rem] m-[2vmax] max-sm:m-[2vw]'
                />

                <input
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={changeHandler}
                    required
                    placeholder='Enter your password'
                    className='px-[2vmax] max-sm:px-[8vw] py-[1vmax] max-sm:py-[4vw] w-[80%] rounded-[40px] border border-[#ccc] 
                font-roboto font-thin text-[1.2rem] m-[2vmax] max-sm:m-[2vw]'
                />

                <button
                    type='sumbit'
                    className='btn font-roboto'
                >
                    <span>{loading ? 'Registering...' : 'Register'}</span>
                </button>

                <p className='self-end max-sm:self-center text-[rgba(0,0,0,0.342)] m-[2vmax] font-roboto'>
                    If you have already regitser,
                    <Link
                        to='/'
                        className='ml-2 text-neutral-800 cursor-pointer font-normal'
                    >
                        Log In
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Signup
