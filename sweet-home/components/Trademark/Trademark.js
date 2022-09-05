/*
    * @author Sergio García Navarro
    * @returns Trademark component
    * @version 1.0
    * @date 13/01/2020
    * @description Trademark component
*/
/**
 * This function returns an image that links to the link passed in as a prop
 * @returns A function that returns a JSX element.
 */
export default function Trademark({link}){

    return(

        <>
            <a href={link}><img src="/LogoWeb.png"></img></a>
            <style jsx>{`
                                
                img{

                    /*Box model*/
                    
                    height: 70px;
                    weight: 70px;

                }

            `}</style>
        </>
        
    )


}

