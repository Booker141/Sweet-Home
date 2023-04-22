import {useState} from 'react'
import {FaRegComment} from 'react-icons/fa'
import {colors} from 'styles/frontend-conf'
import global from 'styles/global.module.css'


export default function CommentsCounter(props){

    const [commentsCount, setCommentsCount] = useState(props.comments.length)

    return(
        <>
            <div className='commentsCounter'>
                <p className={global.text2}>{commentsCount}</p>
                <FaRegComment size={20} color={`${colors.secondary}`}/>
            </div>

            <style jsx>{`

                .commentsCounter{   

                    /*Box model*/


                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    /*Visuals*/

                    color: ${colors.secondary};
                    
                }


            `}</style>
        </>
    )
}