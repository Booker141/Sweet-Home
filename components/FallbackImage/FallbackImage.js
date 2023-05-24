/* Static imports */

import { useState } from 'react'
import fallbackImage from 'public/fallbackImage.png'
import Image from 'next/image'



export default function FallbackImage(props){


    return(

        <Image src={props.src === undefined ? fallbackImage : props.src} alt={props.alt} width={props.width} height={props.height} style={props.style}/>

    )

}