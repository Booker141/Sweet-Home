/* Static imports */


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {Bar} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);


export default function BarChart(props) {


    return(
        <>
            <div style={{ position: "relative", height: "auto", width: "auto" }}>
                <Bar data={props?.data} options={props?.options}/>
            </div>
        </>
    )
}