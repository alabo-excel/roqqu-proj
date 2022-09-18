import React from 'react';
import btc from "../assets/images/btc.svg"

const PricesComponent = () => {
    return (
        <div>
            <div className="flex bg-[#0D152E] justify-evenly rounded-md fixed w-[91%] z-40">
                <div className="flex border-r border-[#91A0CE27] pr-10 p-4">
                    <img src={btc} alt="" />
                    <div className="ml-3 my-auto">
                        <div className="text-xl font-bold">BTC /USDT</div>
                        <div className="text-xs text-[#E4E4FA91]">Bitcoin</div>
                    </div>
                </div>

                <div className=" border-r border-[#91A0CE27] pr-10 p-4 text-right">
                    <div className="ml-3 my-auto">
                        <div className="text-xs text[#E4E4FA91]">Last Price</div>
                        <div className="text-lg text-[#1AC9A0] font-bold">18372.99 USDT</div>
                    </div>
                </div>

                <div className=" border-r border-[#91A0CE27] pr-10 p-4 text-right">
                    <div className="ml-3 my-auto">
                        <div className="text-xs text[#E4E4FA91]">High</div>
                        <div className="text-lg text-[#E4E4FA91] font-bold">18372.99 USDT</div>
                    </div>
                </div>

                <div className=" border-r border-[#91A0CE27] pr-10 p-4 text-right">
                    <div className="ml-3 my-auto">
                        <div className="text-xs text[#E4E4FA91]">Low</div>
                        <div className="text-lg text-[#E4E4FA91] font-bold">18372.99 USDT</div>
                    </div>
                </div>

                <div className=" border-r border-[#91A0CE27] pr-10 p-4 text-right">
                    <div className="ml-3 my-auto">
                        <div className="text-xs text[#E4E4FA91]">Volume</div>
                        <div className="text-lg text-[#E4E4FA91] font-bold">18372.99 USDT</div>
                    </div>
                </div>
                <div className="p-4 text-center my-auto w-40">
                    <div className="ml-3 my-auto">
                        <div className="text-xs text[#E4E4FA91]">24h Change</div>
                        <div className="text-sm text-[#1AC9A0] font-bold">+3.04%</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricesComponent;