import {Radar} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function RadarChart(props) {


    return(
        <>
            <div className="radar__chart">
                <Radar data={props?.data} options={props?.options}/>
            </div>
        </>
    )
}