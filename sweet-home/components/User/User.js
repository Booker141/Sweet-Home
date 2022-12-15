import Image from 'next/image'
import global from "styles/global.module.css"
import { AiOutlineCheck } from "react-icons/ai"


export default function User(props){

    const followUser = () => {

    }

    return (
        <>

            <div key={props._id} className={global.user}>
                <Image src={props.userImage} alt="Imagen de usuario" width={30} height={30}></Image>
                <div className={global.text}>
                    {props.username}
                </div>
                <button className={global.buttonTertiary} onClick={ ()=> followUser()}>Seguir <AiOutlineCheck/></button>
            </div>
            <style jsx>{`


                .post__header{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                }
            
            `}</style>

        </>

    )
}