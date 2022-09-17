import React from 'react';
import Book from '../assets/images/Book.svg'
import Fire from '../assets/images/Fire.svg'
import Notifications from '../assets/images/Notification.svg'
import Pulse from '../assets/images/Pulse.svg'
import Settings from '../assets/images/Settings-alt.svg'
import Wallet from '../assets/images/Wallet.svg'
import Chart from '../assets/images/noun_chart.svg'
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="p-5 bg-[#080F24] h-full">

            <div className="my-8">
                <Link to="/trade">
                    <img src={Chart} alt="" />
                </Link>
            </div>
            <div className="my-8">
                <img src={Book} alt="" />
            </div>
            <div className="my-8">
                <img src={Fire} alt="" />
            </div>
            <div className="my-8">
                <img src={Pulse} alt="" />
            </div>
            <div className="my-8">
                <img src={Settings} alt="" />
            </div>
            <div className="my-8">
                <img src={Wallet} alt="" />
            </div>
            <div className="my-8">
                <img src={Notifications} alt="" />
            </div>
        </div>
    );
};

export default Sidebar;