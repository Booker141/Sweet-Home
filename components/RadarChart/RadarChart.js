import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

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