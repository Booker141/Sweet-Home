import global from 'styles/global.module.css'
import { useState, useEffect } from 'react'

export default function Toast (props) {
  const [isActive, setIsActive] = useState(false)
  useEffect(() => {
    const toast = document.getElementById('toast');

    setIsActive(props.isActive)

    if (isActive) {
      console.log('toast active')
      toast.classList.add('active')
    }
    setTimeout(() => {
      setIsActive(false)
      toast.classList.remove('active')
    }, 5000)
  }, [])
  
  return (
    <>
      <div id='toast' className='toast__container'>
        <div className={global.toast}>
          {props.children}
        </div>
      </div>
      <style jsx>{`

            .toast__container{

                /*Position*/

                position: fixed;
                bottom: 0;
                right: 0;
                transform: translate(-100%);

                z-index: 1000;

                /*Visuals*/
                
                transition: 0.5s transform opacity;
                opacity: 0;

            }

            .toast__container.active{

                /*Position*/

                transform: translateY(0);

                /*Visuals*/

                opacity: 1;

            }
        
        `}
      </style>
    </>
  )
}
