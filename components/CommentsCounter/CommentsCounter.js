/* Static imports */

import {useState} from 'react'
import {FiMessageCircle} from 'react-icons/fi'
import {colors} from 'styles/frontend-conf'
import global from 'styles/global.module.css'


export default function CommentsCounter(props){

    const [commentsCount, setCommentsCount] = useState(props.comments.length)

    console.log(commentsCount)

    return(
        <>
            <div className='commentsCounter'>
                <p className={global.text__bold}>Número de comentarios:</p>
                <p className={global.text}>{props.comments.length}</p>
                <FiMessageCircle size={20} color={colors.quaternary}/>
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

                    color: ${colors.quaternary};
                    
                }


            `}</style>
        </>
    )
}