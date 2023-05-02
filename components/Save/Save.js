import global from "/styles/global.module.css"
import {colors} from "styles/frontend-conf"
import {server} from '/server'
import {useSession} from 'next-auth/react'
import {HiOutlineBookmark, HiBookmark} from "react-icons/hi"
import {useState, useEffect} from 'react'

/**
 * This function is used to save a post
 * @param props - This is the props that you're passing to the component.
 * @returns A component that displays the number of saves and a bookmark icon.
 */


export default function Save(props){

    const {data: session} = useSession();
    const [isSave, setIsSave] = useState(false);
    const [count, setCount] = useState(props.saves?.length);
    const [user, setUser] = useState({});
    const isSavedByUser = props.likes?.filter(save => save === user._id);



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

        if(isSavedByUser?.length > 0){

            setIsSave(true);

        }else{
                
            setIsSave(false);

        }

        

    }, [])

        


    const Save = async () => {

        setIsSave(!isSave);
    

        // Like

        if(isSave === true){

            await fetch(`${server}/api/saves`, {headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'POST', body: JSON.stringify({postId: props.postId, userId: user._id})}
            )

            setCount(++count);
            
        }

        // Dislike
        if(isSave === false){

            await fetch(`${server}/api/saves`, {headers: {
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
            <div className='save'>
                <p className={global.text2}>{count}</p>
                <a className='save--status' onClick={() => Save()}>{isSave ? <HiOutlineBookmark size={20} color={colors.secondary} styles={{fontWeight: 'bold'}}/> : <HiBookmark size={20} color={colors.secondary} styles={{fontWeight: 'bold'}}/>}</a>
            </div>
            <style jsx>{`
            
                .save{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;


                }
                .save--status{

                    /*Box model*/

                    display: flex;
                    align-items:center;
                    justify-content: center;
                    width: 2rem;

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