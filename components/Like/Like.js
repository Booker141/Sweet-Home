import global from "/styles/global.module.css"
import {useState, useEffect} from 'react'
import {useSession} from 'next-auth/react'
import {colors} from "styles/frontend-conf"
import {HiHeart, HiOutlineHeart} from "react-icons/hi"
import {MdClose} from 'react-icons/md'
import {server} from '/server'
import Modal from '/components/Modal/Modal'


export default function Like(props){

    const {data: session} = useSession();
    const [isLike, setIsLike] = useState(false);
    const [count, setCount] = useState(props.likes?.length);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [user, setUser] = useState({});
    const [usersLike, setUsersLike] = useState([]);
    const isLikedByUser = props.likes?.filter(like => like === user._id);

    

    /**
     * This function fetches data from a server endpoint and sets the retrieved data to a state
     * variable.
     */
    const getUsersLike = async () => {

        const res = await fetch(`${server}/api/likes/${props.postId}`, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, method: 'GET'}
        )


        const data = await res.json();

        setUsersLike(data);

    }

    const getUser = async () => {

        const res = await fetch(`${server}/api/users/${session.user.username}`, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, method: 'GET'}
        )

        const data = res.json()
        setUser(data)

    }



    useEffect(() => {

        getUser()

        if(isLikedByUser?.length > 0){

            setIsLike(true);
            getUsersLike()

        }else{
                
            setIsLike(false);
            getUsersLike()

        }

        

    }, [])

        


    const Like = async () => {

        setIsLike(!isLike);

        

        // Like

        if(isLike === true){

            await fetch(`${server}/api/likes`, {headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'POST', body: JSON.stringify({postId: props.postId, userId: user._id})}
            )

            setCount(++count);
            
        }

        // Dislike
        if(isLike === false){

            await fetch(`${server}/api/likes`, {headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'DELETE', body: JSON.stringify({postId: props.postId, userId: user._id})}
            )

            if(count > 0){
                setCount(--count);
            }

        }
    

    }

    return(
        <>
            <div className='like'>
                <button onClick={() => setIsModalVisible(true)} className={global.text2}>{count}</button>
                <a className='like--status' onClick={() => Like()}>{isLike ? <HiOutlineHeart size={20} color={colors.secondary} styles={{fontWeight: 'bold'}}/> : <HiHeart size={20} color={colors.secondary} styles={{fontWeight: 'bold'}}/>}</a>
            </div>
            {isModalVisible && <Modal>
                    <button className="close__modal" onClick={() => setIsModalVisible(false)}><MdClose size={30} color={`${colors.secondary}`}/></button>
                    <h2 className={global.title3}>Le ha gustado a:</h2>
                    <div className='users__like'>
                        {usersLike.map(userLike => (
                            <>
                                <p className={global.text2}>{user.username}</p>
                                <hr className={white__line}/>
                            </>
                        ))}
                    </div>
                </Modal>}
            <style jsx>{`
            
                .like{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.5rem;

                }
                .like--status{

                    /*Box model*/

                    display: flex;
                    align-items:center;

                    /*Misc*/

                    cursor: pointer;
                    
                }

                .close__modal{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-self: flex-end;
                    margin-right: 2rem;

                    /*Visuals*/

                    border: none;
                    background: transparent;
                    cursor: pointer;

                    }

                a{

                /*Misc*/

                cursor: pointer;

                }

                button{

                    /*Box model*/

                    background: none;
                    border: none;
                    outline: none;
                    cursor: pointer;
                }
            `}
            </style>
        </>
    )
}