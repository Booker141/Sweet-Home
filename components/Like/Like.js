import global from "/styles/global.module.css"
import {useState, useEffect} from 'react'
import {colors} from "styles/frontend-conf"
import {HiHeart, HiOutlineHeart} from "react-icons/hi"


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
                <p className={global.text2}>{props.likes.length === null ? 0 : props.likes.length}</p>
                <a className='like--status' onClick={() => Like()}>{isLike ? <HiHeart size={20} color={colors.secondary} styles={{fontWeight: 'bold'}}/> : <HiOutlineHeart size={20} color={colors.secondary} styles={{fontWeight: 'bold'}}/>}</a>
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

                    /*Box model*/

                    display: flex;
                    align-items:center;

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