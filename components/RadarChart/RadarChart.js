import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * We're using the useState hook to create two state variables, radarData and radarOptions, and then
 * we're using the useEffect hook to set the state variables to the props that are passed in
 * @param props - {
 * @returns A Radar Chart
 */
export default function RadarChart(props) {

    const [radarData, setRadarData] = useState({});
    const [radarOptions, setRadarOptions] = useState({});

    useEffect(() => {

        setRadarData(props.data);
        setRadarOptions(props.options);

    }, [props.data, props.options]);

    return(
        <>
            <div className="radar__chart">
                <Radar data={radarData} options={radarOptions}/>
            </div>
        </>
    )
}