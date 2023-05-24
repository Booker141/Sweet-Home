/* Static imports */

import { useState } from 'react'
import fallbackImage from 'public/fallbackImage.png'
import dynamic from 'next/dynamic'

/* Dynamic imports */

const Image = dynamic(() => import('next/image'))


export default function FallbackImage(props){

    console.log(props.src)

    const [fallback, setFallback] = useState(props.src)

    return(

        <Image src={fallback} alt={props.alt} width={props.width} height={props.height} style={props.style}/>

    )

}