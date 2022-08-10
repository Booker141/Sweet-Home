/**
 * @author Sergio García Navarro
 * @returns rendered website logo
 */
export default function Trademark({link}){

    return(

        <>
            <a href={link}><img src="/LogoWeb.png"></img></a>
            <style jsx>{`
                                
                img{

                    height: 13vh;
                    weight: 13vw;

                }

            `}</style>
        </>
        
    )


}

