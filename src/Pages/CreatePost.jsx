import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { createPostHandler } from '../Services';

const initialValue = {
    title: "",
    body: "",
}

const CreatePost = () => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading] = useState(false);

    // userId = 1 -> Default
    //because api users has 1 to 10 userId and json api does not changes actually
    const { userId = 1 } = useSelector(state => state.auth);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newData = { ...data, userId: userId };
        createPostHandler(setLoading, newData);
        setData(initialValue);
    }

    return (
        <div className='min-h-screen bg-gradient-to-r from-[#fff5bc] to-[#cec1ff] flex items-center justify-center p-[2vmax] box-border'>
            <form
                onSubmit={submitHandler}
                className='bg-white h-full w-2/4 max-sm:w-full rounded-[30px] box-border p-[2vmax] flex flex-col items-center'
            >
                <h3 className='m-[2vmax] text-3xl font-semibold font-roboto'>Create new post</h3>
                <input
                    type="text"
                    name='title'
                    id='title'
                    value={data.title}
                    onChange={changeHandler}
                    placeholder='Title'
                    required
                    className='w-full p-[1vmax] rounded-[30px] border-none outline-none font-thin text-[1.2rem] font-roboto'
                />
                <input
                    type="text"
                    name='body'
                    id='body'
                    value={data.body}
                    onChange={changeHandler}
                    placeholder='Body'
                    required
                    className='w-full p-[1vmax] rounded-[30px] border-none outline-none font-thin text-[1.2rem] font-roboto'
                />

                <button
                    type="submit"
                    className='font-roboto font-normal btn max-sm:text-[10px] max-sm:w-min max-sm:px-2 '
                >
                    <span className='max-sm:text-[10px]'>{loading ? 'Creating...' : 'Create Post'}</span>
                </button>
            </form>
        </div>
    )
}

export default CreatePost
