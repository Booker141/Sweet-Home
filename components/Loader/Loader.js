
/** 
  * @author Sergio García Navarro
  * @returns Loader component
  * @version 1.0
  * @description Loader component
*/

/**
 * This function is a loader component
 * @returns A loader.
 */
export default function Loader() {
  return (
    <>
      <div className="loader__container">
        <img src="/loader.svg" />
      </div>
      <style jsx>
        {`
          .loader__container {
            /*Position*/

            position: fixed;
            z-index: 1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            /*Box model*/

            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
