import {useState} from 'react'
import {BsChat} from 'react-icons/bs'
import {colors} from 'styles/frontend-conf'
import global from 'styles/global.module.css'


export default function CommentsCounter(props){

    const [commentsCount, setCommentsCount] = useState(props.comments.length)

    return(
        <>
            <div className='commentsCounter'>
                <p className={global.text2}>{commentsCount}</p>
                <BsChat size={20} color={colors.secondary}/>
            </div>

            <style jsx>{`

                .commentsCounter{   

                    /*Box model*/


                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;

                    /*Visuals*/

                    color: ${colors.secondary};
                    
                }


            `}</style>
        </>
    )
}