/* Static imports */

import "chart.js/auto";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'


/* Dynamic imports */

const PolarArea =  dynamic(() => import('react-chartjs-2'))


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