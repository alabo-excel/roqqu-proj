import React from 'react';
import PriceComponent from "../components/PricesComponent"
import Chart from "../components/Chart"
import Table from "../components/TableComp"

const trade = () => {
    const trades = [
        {
            time: "12.22.33",
            percent: "488.90",
            amount: "8787889.8999",
            total: "78787.898"
        },
        {
            time: "12.22.33",
            percent: "488.90",
            amount: "8787889.8999",
            total: "78787.898"
        },
        {
            time: "12.22.33",
            percent: "488.90",
            amount: "8787889.8999",
            total: "78787.898"
        },
        {
            time: "12.22.33",
            percent: "488.90",
            amount: "8787889.8999",
            total: "78787.898"
        },
        {
            time: "12.22.33",
            percent: "488.90",
            amount: "8787889.8999",
            total: "78787.898"
        },
        {
            time: "12.22.33",
            percent: "488.90",
            amount: "8787889.8999",
            total: "78787.898"
        },
        {
            time: "12.22.33",
            percent: "488.90",
            amount: "8787889.8999",
            total: "78787.898"
        },
        {
            time: "12.22.33",
            percent: "488.90",
            amount: "8787889.8999",
            total: "78787.898"
        },
        {
            time: "12.22.33",
            percent: "488.90",
            amount: "8787889.8999",
            total: "78787.898"
        },

    ]
    return (
        <div className="p-6">
            <PriceComponent />
            <div className="flex justify-between mt-28">
                <div className="w-[70%]">
                    <div className=" p-4 bg-[#080F24] h-96">
                        <div className="flex justify-between">
                            <div className="font-bold text-base">Charts</div>
                            <div className="flex  text-sm" >
                                <div className="bg-[#051955] p-2 rounded-md px-4">Price</div>
                                <div className="my-auto ml-6">Depth</div>
                            </div>
                        </div>
                        <Chart />
                    </div>

                    <div className="bg-[#080F24] my-4">
                        <div className="p-3 font-bold text-base">Market Trades</div>
                        <div className="bg-[#04091C]  text-sm m-2">
                            <table className="w-full">
                                <thead className="uppercase text-[#E4E4FA91]">
                                    <tr>
                                        <td className="p-3">time</td>
                                        <td className="p-3">price(usdt)</td>
                                        <td className="p-3">amount(btc)</td>
                                        <td className="p-3">total usdt</td>
                                    </tr>
                                </thead>
                                <tbody className="text-xs">
                                    {trades.map((trade, i) => (
                                        <tr key={i}>
                                            <td className="p-3"> {trade.time}</td>
                                            <td className="p-3"> {trade.percent}</td>
                                            <td className="p-3"> {trade.amount}</td>
                                            <td className="p-3"> {trade.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="w-[27%]">
                    <div className="bg-[#080F24] p-3">
                        <div className="font-bold text-xl my-2">Order Book</div>
                        <Table />
                    </div>
                    <div className="my-5 bg-[#080F24] p-3">
                        <div className="font-bold text-lg my-2">Place Order </div>
                        <div className="bg-[#04091C] text-center p-14">
                            <span className="font-bold">Sign</span> in or <span className="font-bold">Create Account</span> to Continue
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default trade;