import { addUserData, setUserAuthenticate } from "../redux/authSlice";
import { toast } from 'react-hot-toast';
import axios from "axios";

export const registerUser = (data) => {
    return (disptach) => {
        const toastId = toast.loading('Loading...');
        setTimeout(() => {
            const userData = JSON.parse(localStorage.getItem('user'));
            toast.dismiss(toastId);
            if (!userData) {
                localStorage.setItem('user', JSON.stringify({ ...data, isAuthenticate: true }));
                disptach(addUserData(data));
                disptach(setUserAuthenticate(true))
                toast.success('User registered.');
                // console.log('User register successfull');
                return data;
            } else {
                if (userData['email'] === data.email) {
                    toast.error('User already regitser.');
                    // console.log("User already regitser");
                }
                else {
                    toast.error('User email is does not exist.');
                    // console.log('User email is does not exist');
                }
            }
        }, 1000)
    }
}

export const loginUser = (data) => {
    return (disptach) => {
        const toastId = toast.loading('Loading...');
        setTimeout(() => {
            let userData = JSON.parse(localStorage.getItem('user'));
            toast.dismiss(toastId);
            if (!userData) {
                toast.error('User not regitser.');
                // console.log('User not regitser');
            } else {
                if (userData.email === data.email && userData.password === data.password) {
                    userData = { ...userData, isAuthenticate: true };
                    localStorage.setItem('user', JSON.stringify(userData));
                    disptach(addUserData(userData));
                    disptach(setUserAuthenticate(true));
                    toast.success('User login successfull');
                    // console.log('User login successfull');

                } else if (userData.email === data.email && userData.password !== data.password) {
                    // console.log('Password Incorrect');
                    toast.error('Password Incorrect.');

                } else {
                    toast.error('User not regitser.');
                    // console.log('User not regitser');

                }
            }
        }, 1000);
    }
}

export const loggedOut = () => {
    return (disptach) => {
        const toastId = toast.loading('Loading...');
        setTimeout(() => {
            try {
                let data = JSON.parse(localStorage.getItem('user'));
                localStorage.setItem('user', JSON.stringify({ ...data, isAuthenticate: false }));
                disptach(addUserData(null));
                disptach(setUserAuthenticate(false));
                toast.success('User loggedOut.');
            } catch (err) {
                toast.error('User loggedOut failed.');
                console.log(err);
            }
            toast.dismiss(toastId);
        }, 1000);
    }
}

export const deleteAccount = (setOpen) => {
    return (dispatch) => {
        const toastId = toast.loading('Loading...');
        setTimeout(() => {
            try {
                localStorage.clear();
                dispatch(addUserData(null));
                dispatch(setUserAuthenticate(false));
                toast.success('Account Deleted.');
                setOpen(false);
            } catch (err) {
                toast.error('Account not deleted.');
                console.log(err);
            }
            toast.dismiss(toastId);
        }, 1500);
    }
}


// Post Services

export const searchHandler = async (setLoading,serchText,setData) => {
    setLoading(true);
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${serchText}`);
        setData(response?.data);
        if (!response || response?.data.length <= 0) {
            throw new Error('User id is invalid');
        }
        console.log(response);
    } catch (err) {
        toast.error(err.message);
        console.log(err);
    }
    setLoading(false);
}

export const getPostData = async (setLoading,setPostData) => {
    setLoading(true);
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        if (!response) {
            throw new Error('Post data is not fetch, please try later!')
        }
        setPostData(response?.data);
        console.log(response)
    } catch (err) {
        console.log(err);
    }
    setLoading(false);
}

export const createPostHandler = async (setLoading, data) => {
    setLoading(true);
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
        if (!response) {
            throw new Error("Create not created, some error occurred");
        }
        toast.success('Post Created');
        console.log(response);
    } catch (err) {
        console.log(err);
        toast.error(err.message);
    }
    setLoading(false);
}

export const updatePostHandler = async (setLoading,data,setOpen) => {
    const toastId = toast.loading('Loading...');
    setLoading(true);
    try {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            {
                title: data.title,
                body: data.body,
                id: postId,
                userId
            },
        );
        if (!response) {
            throw new Error('Post not updated, Please try again later')
        }
        toast.success('Post Updated.');
        setOpen(false);
        console.log(response);
    } catch (err) {
        toast.error(err.message);
        console.log(err);
    }
    setLoading(false);
    toast.dismiss(toastId);
}

export const deletePostHandler = async (setLoading,postId,setOpen) => {
    const toastId = toast.loading('Loading...');
    setLoading(true);
    try {
        const response = await axios.delete(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!response) {
            throw new Error('Post not deleted, Please try again later')
        }
        toast.success('Post Deleted.');
        setOpen(false);
        console.log(response);
    }catch (err) {
        toast.error(err.message);
        console.log(err);
    }
    setLoading(false);
    toast.dismiss(toastId);
}