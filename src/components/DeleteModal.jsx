import React, { useState } from 'react'
import { Box, Button, Modal } from '@mui/material';

const DeleteModal = ({ open, setOpen, handler, title, postId, postData, setPostData}) => {
    const [loading, setLoading] = useState(false);
    
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col 
                        gap-y-5 w-[400px] rounded-lg bg-[#fff] p-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            >
                <div className='text-lg text-neutral-500 font-normal font-roboto mt-5 px-5'>
                    {title}
                </div>
                <div className='mt-5 flex justify-end gap-x-5'>
                    <Button
                        variant='outlined'
                        color='primary'
                        size='small'
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant='outlined'
                        color='error'
                        size='small'
                        onClick={() => handler(setLoading,postId,setOpen,postData,setPostData )}
                    >
                        {loading ? 'Deleting...' : 'Delete'}
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}

export default DeleteModal
