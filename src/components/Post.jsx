import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import { MdDelete, MdModeEdit } from "react-icons/md";
import EditPostModal from './EditPostModal';
import DeleteModal from './DeleteModal';
import { deletePostHandler, updatePostHandler } from '../Services';


const Post = ({ title, body, userId, postId }) => {
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

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
            />

            <DeleteModal
                open={deleteModal}
                setOpen={setDeleteModal}
                postId={postId}
                handler={deletePostHandler}
                title={'Are you sure, delete the post'}
            />
        </div>
    )
}

export default Post
