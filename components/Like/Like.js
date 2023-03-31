import global from "/styles/global.module.css"
import {useState, useEffect} from 'react'
import {colors} from "styles/frontend-conf"
import {IoPaw, IoPawOutline} from "react-icons/io5"


export default function Like(props){

    const [isLike, setIsLike] = useState(false);

    useEffect(() => {
        
    }, [])

    const Like = () => {
        setIsLike(!isLike)
    
        // Like function
    }

    return(
        <>
            <div className='like'>
                <p className={global.text2__bold}>{props.likes.length === null ? 0 : props.likes.length}</p>
                <a className='like--status' onClick={() => Like()}>{isLike ? <IoPaw size={20} color={colors.secondary} /> : <IoPawOutline size={20} color={colors.secondary} />}</a>
            </div>
            <style jsx>{`
                .like{

                /*Box model*/

                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;

                }
                .like--status{

                    /*Misc*/

                    cursor: pointer;
                }
                a{

                /*Misc*/

                cursor: pointer;

                }
            `}
            </style>
        </>
    )
}