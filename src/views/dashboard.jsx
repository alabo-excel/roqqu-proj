import React from 'react';
import GreetingCard
    from '../components/GreetingCard';
import AssetCard from '../components/AssetCard';
import btc from "../assets/images/btc.svg"
import tet from "../assets/images/tet.svg"
import eth from "../assets/images/eth.svg"
import bin from "../assets/images/bin.svg"
import ActivitiesCard from "../components/ActivitiesCard"

const dashboard = () => {
    const assets = [
        {
            img: btc,
            title: "Bitcoin",
            price: "54372.94USD",
            rate: "+2.43%",
            abbr: "BTC",
        },
        {
            img: tet,
            title: "Tether",
            price: "1.02 USD",
            rate: "+2.43%",
            abbr: "USDT",
        },
        {
            img: eth,
            title: "Ethereum",
            price: "54372.94USD",
            rate: "+2.43%",
            abbr: "ETH",
        },
        {
            img: bin,
            title: "Binance Coin",
            price: "54372.94USD",
            rate: "+2.43%",
            abbr: "BNB",
        },
    ]
    const activities = [{
        title: "Withdrew USDT"
    }, {
        title: "Exchanged BTC"
    }, {
        title: "Deposit ETH"
    }]
    return (
        <div className="p-8">
            <div className="flex justify-between">
                <div className="w-[70%]">
                    <GreetingCard />
                    <div className="flex justify-between my-4 my-10">
                        <div className="flex w-1/2 text-sm text-[#91A0CED8] justify-between">
                            <div className="text-[#6E97F5] font-bold border-b-2 pb-2 border-[#6E97F5]">Core Assets</div>
                            <div>Top Gainers</div>
                            <div>Top Losers</div>
                            <div>New</div>
                        </div>
                        <div className="text-white text-sm">
                            Market Cap
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between w-[90%]">
                        {assets.map((asset, i) => (
                            <AssetCard key={i} img={asset.img} title={asset.title} price={asset.price} abbr={asset.abbr} rate={asset.rate} />
                        ))}
                    </div>
                </div>
                <div className="bg-[#080F24] w-[27%] p-3">
                    <div className="bg-[#04091C] p-3 rounded-sm">
                        <div className="text-sm">WALLET BALANCE</div>
                        <div className=" text-center">
                            <div className="bg-[#D17300] p-1 mt-6 w-14 mx-auto rounded-full">BTC</div>
                            <div className="text-3xl font-bold my-2">0.2993029</div>
                            <div className="text-[#1AC9A0] text-sm">3,700 USD</div>
                            <button className="bg-[#0165FF] p-2 rounded-md w-32 my-6">Withdraw </button>
                        </div>
                    </div>
                    <div className="font-bold text-base mt-8 mb-4">
                        Latest Activities
                    </div>
                    <div>
                        {activities.map((a) => (
                            <ActivitiesCard activities={a.title} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default dashboard;