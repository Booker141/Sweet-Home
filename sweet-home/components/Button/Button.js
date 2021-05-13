
export default function Button({children, onClick}){

        return (
            <>
                <div>
                    <button onClick={onClick}>{children}</button>
                    <style jsx>
                    {`
                                
                        button{

                                height: 60px;
                                width: 250px;
                                padding: 4px;
                                position: relative;
                                margin: 0 auto;
                                background-image: linear-gradient(to right, #f0810f 30%, #f9A603 70%);
                                border-radius: 40px;
                                box-sizing: border-box;
                                color: #f0810f;
                                display: block;
                                font-family:'Poppins-Light';

                        }

                    `}
                    </style>
                </div>

            </>        
    )
       

}
