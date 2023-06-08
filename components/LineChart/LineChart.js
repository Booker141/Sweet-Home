import { Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

/** 
  * @author Sergio García Navarro
  * @returns Line chart component
  * @version 1.0
  * @description Line chart component
*/

/**
 * This function is a line chart representation that receive props from page and displays them
 * in a line chart
 * @param props - props received from page.
 * @returns A line chart.
 */
export default function LineChart(props) {
  return (
    <>
      <div style={{ position: "relative", height: "auto", width: "auto" }}>
        <Line data={props?.data} options={props?.options} />
      </div>
    </>
  );
}
