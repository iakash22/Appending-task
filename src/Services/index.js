import { addUserData, setUserAuthenticate } from "../redux/authSlice";
import { toast } from 'react-hot-toast';

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