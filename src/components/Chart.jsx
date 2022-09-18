import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const Chart = () => {
    return (
        <div className='mt-8 w-[100%] h-[80%]'>
            <TradingViewWidget
                theme={Themes.DARK}
                locale="en"
                autosize
                symbol="BITSTAMP:BTCUSD"
                interval="D"
                timezone="Etc/UTC"
                style="1"
                toolbar_bg="#f1f3f6"
                hide_top_toolbar="true"
                hide_legend="true"
                save_image="false"
                container_id="tradingview_b0864"
            />
        </div>
    );
};

export default Chart;