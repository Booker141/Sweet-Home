import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BarChart(props) {

    const [barData, setBarData] = useState({});
    const [barOptions, setBarOptions] = useState({});

    useEffect(() => {

        setBarData(props.data);
        setBarOptions(props.options);

    }, [props.data, props.options]);

    return(
        <>
            <div className="bar__chart">
                <Bar data={barData} options={barOptions}/>
            </div>
        </>
    )
}