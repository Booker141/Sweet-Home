/* Static imports */

import {colors, fonts} from "/styles/frontend-conf"
import dynamic from 'next/dynamic'

/* Dynamic imports */

const FallbackImage = dynamic(() => import('/components/FallbackImage/FallbackImage'))



export default function Avatar(props){

    return(
        <>
            <div className="content__avatar">
                <FallbackImage src={props.image} />
                <p className="avatar__name">
                    {props.name}
                </p>
                <p className="avatar__message">
                    {props.message}
                </p>
            </div>
            <style jsx>{`
            
                .avatar{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;

                }

                .avatar__name{

                    /*Box model*/

                    margin-left: 1rem;

                    /*Text*/

                    font-family: ${fonts.primary};
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: ${colors.primary};

                }

                .avatar__message{

                    /*Box model*/

                    margin-left: 1rem;

                    /*Text*/

                    font-family: ${fonts.primary};
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: ${colors.primary};

                }
                
            `}</style>
        </>
    )
}