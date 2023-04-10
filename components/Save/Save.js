import global from "/styles/global.module.css"
import {colors} from "styles/frontend-conf"
import {HiOutlineBookmark, HiBookmark} from "react-icons/hi"
import {useState, useEffect} from 'react'

/**
 * This function is used to save a post
 * @param props - This is the props that you're passing to the component.
 * @returns A component that displays the number of saves and a bookmark icon.
 */
export default function Save(props){

    const [isSave, setIsSave] = useState(false);
    
    useEffect(() => {

    }, [])
    
    const Save = () => {
        setIsSave(!isSave)
    
        // Save function
    }

    return(
        <>
            <div className='save'>
                    <p className={global.text2}>{props.saves.length === null ? 0 : props.saves.length}</p>
                    <a className='save--status' onClick={() => Save()}>{isSave ? <HiBookmark size={20} color={colors.secondary} /> : <HiOutlineBookmark className='bookmark1' size={20} color={colors.secondary} />}</a>
            </div>
            <style jsx>{`
                
                .save{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 1rem;

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
            `}</style>

        </>
    )


}