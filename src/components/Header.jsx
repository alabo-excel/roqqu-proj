import React from 'react';
import image from "../assets/logo.png"

const Header = () => {
    return (
        <div className='header bg-[#080F24]'>
            <div className='flex justify-between mx-8 p-5'>
                <div>
                    <img className="w-32" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;