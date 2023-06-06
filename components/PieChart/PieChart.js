import {Pie} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);


export default function RadarChart(props) {


    return(
        <>
            <div style={{ position: "relative", height: "auto", width: "auto" }}>
                <Pie data={props?.data} options={props?.options} width={10} height={10}/>
            </div>
        </>
    )
}