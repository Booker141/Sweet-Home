import global from "/styles/global.module.css"
import {useState, useEffect} from 'react'
import {useSession} from 'next-auth/react'
import {colors} from "styles/frontend-conf"
import {MdBookmark, MdBookmarkBorder} from "react-icons/md"
import {server} from '/server'



export default function Save(props){

    const {data: session} = useSession();
    const [user, setUser] = useState({});

    const [isSavedByMe, setIsSavedByMe] = useState(false)



    async function getUser(){
    
        const res = await fetch(`${server}/api/users/${session.user.username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const user = await res.json()

        setUser(user)
        setIsSavedByMe(props.saves.includes(user._id))

    }



    useEffect(() => {

        getUser();

    }, [])

        


    const Save = async () => {


        // Save

        if(isSavedByMe === false){

            await fetch(`${server}/api/saves`, {headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'PUT', body: JSON.stringify({postId: props.postId, userId: user._id})}
            )

            setIsSavedByMe(true)

            
        }else{

            await fetch(`${server}/api/unsave`, {headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: 'PUT', body: JSON.stringify({postId: props.postId, userId: user._id})}
            )

            setIsSavedByMe(false)

            
        }
    

    }

    return(
        <>
            <div className='save'>
                <button className='save--status' onClick={() => Save()}>{isSavedByMe && <MdBookmark size={20} color={colors.secondary} styles={{fontWeight: 'bold'}}/>}{!isSavedByMe && <MdBookmarkBorder size={20} color={colors.secondary} styles={{fontWeight: 'bold'}}/>}</button>
            </div>
            
            <style jsx>{`
            
                .save{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 0.5rem;

                }
                .save--status{

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