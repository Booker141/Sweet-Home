import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * We're creating a function called PolarAreaChart that takes in props as an argument. We're using the
 * useState hook to create two state variables, polarData and polarOptions. We're using the useEffect
 * hook to set the state variables to the props that are passed in. Finally, we're returning a div with
 * a className of polar__chart that contains a PolarArea component
 * @param props - This is the data and options that we're passing to the PolarAreaChart component.
 * @returns A PolarAreaChart component that takes in props and returns a PolarArea chart.
 */
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