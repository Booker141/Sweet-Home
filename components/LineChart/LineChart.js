import {Line} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);


export default function LineChart(props) {


    return(
        <>
            <div style={{ position: "relative", height: "auto", width: "auto" }}>
                <Line data={props?.data} options={props?.options}/>
            </div>
        </>
    )
}