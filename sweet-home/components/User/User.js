import Image from 'next/image'
import global from "styles/global.module.css"
import {useState} from 'react'
import { AiOutlineCheck } from "react-icons/ai"


export default function User(props){

    const [isFollowing, setIsFollowing] = useState(false);

    const followUser = () => {
        
        setIsFollowing(!isFollowing);

        if(isFollowing){

        }

    }

    return (
        <>

            <div key={props._id} className={global.user}>
                <div className="user__image">
                    <Image src={props.userImage} alt="Imagen de usuario" width={30} height={30}></Image>
                </div>
                <div className={global.text}>
                    @{props.username}
                </div>
                {isFollowing ? <button className={global.buttonTertiary2} onClick={ () => followUser()}>Seguir <AiOutlineCheck/></button> : <button className={global.buttonFollowed} onClick={() => followUser()}>Seguido</button>}
            </div>
            <style jsx>{`


                .post__header{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                }

                .text{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                .buttonTertiary{

                    /*Box model*/

                    display: flex;
                    float: right;
                }
            
            `}</style>

        </>

    )
}