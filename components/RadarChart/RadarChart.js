import {Radar} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, RadialLinearScale, Legend, PointElement, LineElement } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale, PointElement, LineElement);


export default function RadarChart(props) {


    return(
        <>
            <div style={{ position: "relative", height: "auto", width: "auto" }}>
                <Radar data={props?.data} options={props?.options}/>
            </div>
        </>
    )
}