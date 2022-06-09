import Link from 'next/link'
import {colors} from 'styles/frontend-conf.js'

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
                                margin: 0 auto;
                                background-color: ${colors.tertiary};
                                border-radius: 40px;
                                border: none;
                                color: ${colors.secondary};
                                display: block;
                                font-family: "Poppins-Light";

                        }

                    `}
                    </style>

            </>        
    )
       
}
