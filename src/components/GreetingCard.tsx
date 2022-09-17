import React from 'react';
import group from "../assets/images/Group.svg"

const GreetingCard = () => {
    return (
        <div className="greeting">
            <div className="flex p-8 justify-between">
                <div className="w-[60%]">
                    <div className="text-base font-light  mb-4">JANUARY 2, 2022</div>
                    <div className="text-2xl font-bold">Welcome to Roqqu’s Decentralized Exchange</div>
                    <div className="text-sm font-light my-4 w-[90%] leading-loose">With an easy-to-use interface, we provide industry-leading security and deep liquidity</div>
                    <button className="btn p-4 font-bold rounded-md w-44 bg-[#030303]">
                        Learn More
                    </button>
                </div>
                <div>
                    <img className="w-62 mx-auto my-auto" src={group} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GreetingCard;