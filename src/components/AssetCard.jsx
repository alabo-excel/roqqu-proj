import React from 'react';

const AssetCard = (props) => {
    console.log(props)
    return (
        <div className="bg-[#080F24] my-3">
            <div className="flex justify-between w-[360px] px-5 p-3">
                <div className="flex">
                    <img src={props.img} className="mx-2" alt="" />
                    <div className="my-auto">
                        <div className="text-base">{props.title}</div>
                        <div className="text-sm font-light">{props.abbr}</div>
                    </div>
                </div>
                <div className="my-auto">
                    <div className="font-bold text-base">{props.price}</div>
                    <div className="text-[#1AC9A0] font-light text-sm">{props.rate}</div>
                </div>
            </div>
        </div>
    );
};

export default AssetCard;