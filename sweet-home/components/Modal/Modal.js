
export default function Modal({children}){


    return (
        <>
            <div className="center">
                <div className="card">
                    {children}
                </div>
            </div>

        <style jsx>{`

        .center{

            /*Position*/

            position: fixed;
            top: 0;
            left: 0;
            z-index: 999999999;
            background-color: rgba(0,0,0,0.4);

            /*Box model*/

            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;

        }

        .card{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 50rem;
            height: 20rem;
            padding: 1rem;

            /*Visuals*/

            border: 2px solid #f0810f;
            border-radius: 10px;
            background-color: #fff;
            }

            .buttons{

            /* Box model*/

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 50%;
            }

            .buttons button{

            /*Box model*/

            margin: 1rem;
            }


        `}</style>
        </>
    );




}