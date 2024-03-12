import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import { MdDelete, MdModeEdit } from "react-icons/md";
import EditPostModal from './EditPostModal';
import DeleteModal from './DeleteModal';
import toast from 'react-hot-toast';


const NewPost = ({ title, body, userId, postId, postData, setPostData }) => {
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    console.log(postId);

    const updatePostHandler = (setLoading, data, setOpen, postData, setPostData) => {
        const toastId = toast.loading('Loading...');
        setLoading(true);
        setTimeout(() => {
            const updataData = postData.map((post, index) => index === postId ? {
                ...post, title: data.title, body: data.body,
            } : post);
            toast.dismiss(toastId);
            // console.log(updataData);
            toast.success('Post Updated.');
            setPostData(updataData);
            setOpen(false);
            setLoading(false)
        }, 500);
    }

    const deletePostHandler = (setLoading, postId, setOpen, postData, setPostData) => {
        const toastId = toast.loading('Loading...');
        console.log(postId);
        setLoading(true);
        setTimeout(() => {
            toast.dismiss(toastId);
            // console.log(updataData);
            toast.success('Post Deleted.');
            const newData = postData.filter((post,index) => index !== postId);
            console.log(newData)
            setPostData(newData);
            setOpen(false);
            setLoading(false)
        }, 500);
    }

    return (
        <div className='my-3 max-sm:w-full p-3 md:w-2/3 bg-[#fff] rounded-lg'>
            <div className='w-full flex flex-row items-center border-b border-[#d2d1d1] py-2 px-3 gap-x-4'>
                <span className='w-[40px] h-[40px] rounded-full bg-black'></span>
                <span className='text-[2rem] font-roboto font-semibold'>{userId}</span>
            </div>

            <h2 className='my-5 px-3 text-neutral-600 text-xl'>Title : {title}</h2>
            <p className='mb-10 px-3 text-neutral-600 text-sm'>Body : {body}</p>

            <div className='px-3 py-1 border-t border-[#d2d1d1] mt-5 flex flex-row gap-x-5 justify-end'>
                <IconButton
                    aria-label='edit'
                    color='primary'
                    onClick={() => setUpdateModal(true)}
                >
                    <MdModeEdit />
                </IconButton>
                <IconButton
                    aria-label='delete'
                    color='error'
                    onClick={() => setDeleteModal(true)}
                >
                    <MdDelete />
                </IconButton>
            </div>

            <EditPostModal
                open={updateModal}
                setOpen={setUpdateModal}
                title={title}
                body={body}
                userId={userId}
                postId={postId}
                handler={updatePostHandler}
                postData={postData}
                setPostData={setPostData}
            />

            <DeleteModal
                open={deleteModal}
                setOpen={setDeleteModal}
                postId={postId}
                handler={deletePostHandler}
                title={'Are you sure, delete the post'}
                postData={postData}
                setPostData={setPostData}
            />
        </div>
    )
}

export default NewPost;
