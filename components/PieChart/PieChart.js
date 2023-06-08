import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

/** 
  * @author Sergio García Navarro
  * @returns Pie chart component
  * @version 1.0
  * @description Pie chart component
*/

/**
 * This function is a pie chart representation that receive props from page and displays them
 * in a pie chart
 * @param props - props received from page.
 * @returns A pie chart.
 */
export default function RadarChart(props) {
  return (
    <>
      <div style={{ position: "relative", height: "auto", width: "auto" }}>
        <Pie
          data={props?.data}
          options={props?.options}
          width={10}
          height={10}
        />
      </div>
    </>
  );
}
