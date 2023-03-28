import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * We're using the useState hook to create two state variables, barData and barOptions, and then we're
 * using the useEffect hook to set the state variables to the props that are passed in
 * @param props - {
 * @returns A functional component that renders a bar chart.
 */
export default function BarChart(props) {

    const [barData, setBarData] = useState({});
    const [barOptions, setBarOptions] = useState({});

    /* It's a hook that runs after the component is rendered. It's like componentDidMount. */
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