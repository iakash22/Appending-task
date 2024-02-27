import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiHome, TiHomeOutline } from "react-icons/ti";
import { FaCircleUser, FaRegCircleUser } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoSearchSharp,IoSearchOutline,IoAddOutline,IoAdd } from "react-icons/io5";
import {useLocation} from 'react-router-dom'

const Header = () => {
    const linkClass = "w-[2vmax] h-[2vmax] my-[1vmax] mx-[4vmax] max-sm:w-[8vw] max-sm:h-[8vw]";
    const iconClass = "text-[2vmax] transition-all text-[rgba(0,0,0,0.445)] hover:text-black hover:scale-[1.2] max-sm:text-[8vw]";
    const location = useLocation();
    
    // console.log(location.pathname);

    return (
        <div className="flex justify-center items-center">
            <Link
                to={'/'}
                className={linkClass+" "}
            >
                {location.pathname === '/' ?
                    <TiHome className={iconClass+" text-black"} />
                    :
                    <TiHomeOutline className={iconClass} />
                }
            </Link>
            <Link 
                to={'/add'}
                className={linkClass}   
            >
                {location.pathname === '/add' ?
                    <IoMdAdd className={iconClass+" text-black"} />
                    :
                    <IoAddOutline className={iconClass} />
                }
            </Link>
            <Link 
                to={'/search'}
                className={linkClass}  
            >
                {location.pathname === '/search' ?
                    <IoSearchSharp className={iconClass+" text-black"} />
                    :
                    <IoSearchOutline className={iconClass} />
                }
            </Link>
            <Link 
                to={'/user'}
                className={linkClass}   
            >
                {location.pathname === '/user' ?
                    <FaCircleUser className={iconClass+" text-black"} />
                    :
                    <FaRegCircleUser className={iconClass} />
                }
            </Link>
        </div>
    );
};

export default Header;
