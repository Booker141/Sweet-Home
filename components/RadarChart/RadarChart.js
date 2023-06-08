import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  RadialLinearScale,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement
);

/** 
  * @author Sergio García Navarro
  * @returns Radar chart component
  * @version 1.0
  * @description Radar chart component
*/

/**
 * This function is a radar char representation that receive props from page and displays them
 * in a radar chart
 * @param props - props received from page.
 * @returns A radar chart.
 */
export default function RadarChart(props) {
  return (
    <>
      <div style={{ position: "relative", height: "auto", width: "auto" }}>
        <Radar data={props?.data} options={props?.options} />
      </div>
    </>
  );
}
