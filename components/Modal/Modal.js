/**
 * @author Sergio García Navarro
 * @returns Modal component
 * @version 1.0
 * @description Modal component
 */

/**
 * This function is a modal component that receive children props from page and displays them
 * in a modal pop up
 * @param children - props received from page.
 * @returns A modal.
 */
export default function Modal({ children }) {
  return (
    <>
      <div className="center">
        <div className="card">{children}</div>
      </div>

      <style jsx>
        {`
          .center {
            /*Position*/

            position: fixed;
            top: 0;
            left: 0;
            z-index: 999999999;
            background-color: rgba(148, 92, 13, 0.4);

            /*Box model*/

            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
          }

          .card {
            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 45vw;
            height: fit-content;
            padding: 2rem;

            /*Visuals*/

            border-radius: 20px;
            background-color: #f0810f;
            background: linear-gradient(
              45deg,
              rgba(240, 129, 15, 1) 35%,
              rgba(249, 166, 3, 1) 100%
            );
            opacity: 0.97;
          }

          .buttons {
            /* Box model*/

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 50%;
          }

          .buttons button {
            /*Box model*/

            margin: 1rem;
          }
        `}
      </style>
    </>
  );
}
