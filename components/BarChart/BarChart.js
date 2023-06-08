/* Static imports */

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

/** 
  * @author Sergio García Navarro
  * @returns Bar chart component
  * @version 1.0
  * @description Bar chart component
*/

/**
 * This function is a bar chart component that receive props from page and displays them
 * in an bar chart representation of data
 * @param props - props received from page.
 * @returns A bar chart representation.
 */
export default function BarChart(props) {
  return (
    <>
      <div style={{ position: "relative", height: "auto", width: "auto" }}>
        <Bar data={props?.data} options={props?.options} />
      </div>
    </>
  );
}
