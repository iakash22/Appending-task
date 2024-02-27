import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

const initialValue = {
    title: "",
    body: "",
}

const CreatePost = () => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading] = useState(false);
    const { userId = 1 } = useSelector(state => state.auth);
    const changeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    }

    const createPostHandler = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
            if (!response) {
                throw new Error("Create not created, some error occurred");
            }
            console.log(response);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newData = { ...data, userId: userId };
        // console.log(newData);
        createPostHandler(newData);
        setData(initialValue);
    }
    return (
        <div className='min-h-screen bg-gradient-to-r from-[#fff5bc] to-[#cec1ff] flex items-center justify-center p-[2vmax] box-border'>
            <form
                onSubmit={submitHandler}
                className='bg-white h-full w-2/4 rounded-[30px] box-border p-[2vmax] flex flex-col items-center'
            >
                {loading ? <Loader />
                    :
                    <>
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
                            className='font-roboto font-normal btn'
                        >
                            <span>Create Post</span>
                        </button>
                    </>
                }
            </form>
        </div>
    )
}

export default CreatePost
