import React from 'react';
import image from "../assets/logo.png"
import Notifications from '../assets/images/Notification.svg'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header bg-[#080F24] fixed w-full z-50'>
            <div className='flex justify-between mx-8 p-7'>
                <div>
                    <Link to="/">
                        <img className="w-32" src={image} alt="" />
                    </Link>
                </div>
                <div>
                    <img className="w-6" src={Notifications} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;