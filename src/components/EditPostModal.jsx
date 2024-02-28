import React, { useState } from 'react'
import { Box, Button, Modal,TextField } from '@mui/material';

const EditPostModal = ({ open, setOpen, title, body, postId, userId,handler }) => {
    const [data, setData] = useState({ title, body });
    const [loading, setLoading] = useState(false);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({...prev, [name] : value}))
    }
    
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col 
                        gap-y-5 w-[400px] rounded-lg bg-[#fff] p-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
            >
                <TextField
                    value={data.title}
                    name='title'
                    id='title'
                    label="Title"
                    variant='filled'
                    onChange={changeHandler}
                    sx={{width : '100%'}}
                />
                <TextField
                    value={data.body}
                    name='body'
                    id='body'
                    label="Body"
                    variant='filled'
                    onChange={changeHandler}
                    multiline
                    sx={{width : '100%'}}
                />

                <div className='mt-5 flex justify-end gap-x-5'>
                    <Button
                        variant='outlined'
                        color='error'
                        size='small'
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant='outlined'
                        color='primary'
                        size='small'
                        onClick={() => handler(setLoading,data,setOpen)}
                    >
                        {loading ? 'Updating...' : 'Update'}
                    </Button>
                </div>
            </Box>
        </Modal>
    )
}

export default EditPostModal
