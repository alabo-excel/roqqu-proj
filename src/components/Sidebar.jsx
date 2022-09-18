import React from 'react';
import Book from '../assets/images/Book.svg'
import Fire from '../assets/images/Fire.svg'
import Notifications from '../assets/images/Notification.svg'
import Pulse from '../assets/images/Pulse.svg'
import Settings from '../assets/images/Settings-alt.svg'
import Wallet from '../assets/images/Wallet.svg'
import Chart from '../assets/images/noun_chart.svg'
import Dashboard from '../assets/images/dashboard.svg'
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div className="p-5 fixed top-[65px] bg-[#080F24] h-full sidebar hover:w-52 text-[#E4E4FA91] z-50">
            <div className="my-8">
                <NavLink to="/">
                    <div className="flex">
                        <img className="w-6" src={Dashboard} alt="" />
                        <div className="my-auto pl-8 nav">Home</div>
                    </div>
                </NavLink>
            </div>
            <div className="my-8">
                <NavLink  to="/trade">
                    <div className="flex">
                        <img src={Chart} alt="" />
                        <div className="my-auto pl-8 nav">Exchange</div>
                    </div>
                </NavLink>
            </div>
            <div className="my-8">
                <div className="flex">
                    <img src={Book} alt="" />
                    <div className="my-auto pl-8 nav">Promotions</div>
                </div>
            </div>
            <div className="my-8">
                <div className="flex">
                    <img src={Fire} alt="" />
                    <div className="my-auto pl-8 nav">Promotions</div>
                </div>
            </div>
            <div className="my-8">
                <div className="flex">
                    <img src={Pulse} alt="" />
                    <div className="my-auto pl-8 nav">Activities</div>
                </div>
            </div>
            <div className="my-8">
                <div className="flex">
                    <img src={Settings} alt="" />
                    <div className="my-auto pl-8 nav">Settings</div>
                </div>
            </div>
            <div className="my-8">
                <div className="flex">
                    <img src={Wallet} alt="" />
                    <div className="my-auto pl-8 nav">Wallet</div>
                </div>
            </div>
            <div className="my-8">
                <div className="flex">
                    <img src={Notifications} alt="" />
                    <div className="my-auto pl-8 nav">Notifications</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;