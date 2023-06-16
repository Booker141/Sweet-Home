/* Static imports */

import fallbackImage from "../../public/fallbackImage.png";
import Image from "next/image";

/** 
  * @author Sergio García Navarro
  * @returns Fallback image component
  * @version 1.0
  * @description Fallback image component
*/

/**
 * This function is a fallback image component that receive props from page and displays them
 * in an image with fallback version 
 * @param props - props received from page.
 * @returns A image with fallback version if its source prop is empty.
 */
export default function FallbackImage(props) {
  return (
    <Image
      src={
        props?.src === undefined || props?.src === "" || props?.src === null
          ? fallbackImage
          : props?.src
      }
      alt={props?.alt}
      width={props?.width}
      height={props?.height}
      style={props?.style}
      placeholder="blur"
      blurDataURL={props?.src}
      priority
    />
  );
}
