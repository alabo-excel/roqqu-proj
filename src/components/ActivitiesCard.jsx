import React from 'react';
import transaction from "../assets/images/transaction.svg"

const ActivitiesCard = (props) => {
    return (
        <div className="bg-[#04091C] my-2 rounded-sm">
            <div className="flex justify-between px-5 p-3">
                <div className="flex">
                    <div className="bg-[#4848483C] rounded-full w-12 h-12 my-auto mr-4">
                        <img src={transaction} className=" w-6 h-6 my-3 mx-auto" alt="" />
                    </div>
                    <div className="my-auto">
                        <div className="text-sm font-bold"> {props.activities}</div>
                        <div className="text-[#1AC9A0] my-1 font-light text-xs">Complete</div>
                        <div className="text-xs font-light">992333.93USDT</div>
                    </div>
                </div>
                <div className="">
                    <div className="text-[#91A0CED8] text-xs">Dec 31, 2021</div>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesCard;