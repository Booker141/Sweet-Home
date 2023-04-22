import Image from 'next/image'
import fallbackImage from 'public/fallbackImage.png'
import { useState } from 'react'

export default function FallbackImage(props){

    const [fallback, setFallback] = useState(props.src)

    return(

        <Image src={fallback} alt={props.alt} width={props.width} height={props.height} style={props.style} onError={() => setFallback(fallbackImage)} priority />

    )

}