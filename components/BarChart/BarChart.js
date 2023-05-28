/* Static imports */


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

/* Dynamic imports */

const Bar =  dynamic(() => import('react-chartjs-2'))




ChartJS.register(ArcElement, Tooltip, Legend);


export default function BarChart(props) {

    const [barData, setBarData] = useState({});
    const [barOptions, setBarOptions] = useState({});

   
    useEffect(() => {

        setBarData(props?.data);
        setBarOptions(props?.options);

    }, [props?.data, props?.options]);

    return(
        <>
            <div className="bar__chart">
                <Bar data={barData} options={barOptions}/>
            </div>
        </>
    )
}