import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loggedOut,deleteAccount } from '../Services';
import DeleteModal from '../components/DeleteModal';

const User = () => {
    const { user } = useSelector(state => state.auth);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const deleteUserAccount = async () => {
        await dispatch(deleteAccount(setOpen));
    }
    // console.log(user);
    return (
        <div className='h-screen bg-gradient-to-r from-[#fff5bc] to-[#cec1ff] flex items-center
                        justify-center p-[2vmax] box-border'
        >
            <div className='bg-[#F6F5F5] h-full w-1/2 max-sm:w-full rounded-[30px] box-border p-[2vmax] flex flex-col gap-y-8
                            items-center box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;'
            >
                <div className='rounded-full p-1 md:w-[150px] md:h-[150px] flex items-center
                                justify-center bg-[#C7C8CC] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
                    <img
                        src={`https://api.dicebear.com/5.x/initials/svg?seed=${user?.fullName}`}
                        alt={`${user?.name} image`}
                        className='rounded-full w-full h-full hover:scale-[1.035] cursor-pointer select-none transition-transform 
                        ease-in-out duration-300'
                    />
                </div>
                <div className='flex items-center flex-col mb-10 gapy-3'>
                    <p className='font-roboto font-normal text-xl italic text-neutral-500'>{user?.fullName}</p>
                    <p className='text-neutral-500 text-lg'>{ user?.email}</p>
                </div>
                <button
                    onClick={async() => await dispatch(loggedOut())}
                    className='btn'
                >
                    <span className='text-neutral-600 font-roboto'>Logout</span>
                </button>

                <button
                    onClick={() => setOpen(true)}
                    className='py-2 px-3 border-[#d61212] border-2 bg-[#d51c289c] hover:bg-[#d51c28] 
                            text-neutral-100 text-lg font-normal rounded-md transition-all duration-100 ease-linear 
                                mt-10 hover:shadow-[0_10px_20px_rgba(172,76,76,0.7)] font-roboto active:bg-[#d51c28] focus:bg-[#d51c28]'
                >
                    Delete Account
                </button>
            </div>
            <DeleteModal
                open={open}
                setOpen={setOpen}
                title={"Are you sure, delete your account."}
                handler={deleteUserAccount}
            />
        </div>
    )
}

export default User
// await dispatch(deleteAccount()