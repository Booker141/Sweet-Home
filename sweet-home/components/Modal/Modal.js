import {useState} from 'react'

export default function Modal({children}){

    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
        {showModal ? (
            <div className="center">
                <div className="card">
                    {children}
                </div>
            </div>
        ) : null}

        <style jsx>{`

        .center{

            /*Box model*/

            display: flex;
            align-items: center;
            justify-content: center;
            top: 50%;
            left: 50%;
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
            box-shadow: 10px 10px 5px 0px rgba(214,214,214,0.42);
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