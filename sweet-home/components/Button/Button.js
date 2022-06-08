import Link from "next/link"
export default function Button({href, name}){

        return (

            <>

                    <Link href={href}><a>{name}</a></Link>
                    <style jsx>
                    {`
                                
                        button{

                                height: 60px;
                                width: 250px;
                                padding: 8px 24px;
                                position: relative;
                                cursor: pointer;
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

            </>        
    )
       
}
