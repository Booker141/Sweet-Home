import {Polar} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function PolarAreaChart(props) {

    const [polarData, setPolarData] = useState({});
    const [polarOptions, setPolarOptions] = useState({});

    useEffect(() => {

        setPolarData(props.data);
        setPolarOptions(props.options);

    }, [props.data, props.options]);

    return(
        <>
            <div className="polar__chart">
                <PolarArea data={polarData} options={polarOptions}/>
            </div>
        </>
    )
}