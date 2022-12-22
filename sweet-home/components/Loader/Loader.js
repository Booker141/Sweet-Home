
export default function Loader(){

    return(
        <>
            <div className="loader__container">
                <img src="/public/loader.svg"/>
            </div>
            <style jsx>{`

                .loader__container{

                     /*Position*/

                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(50%, 50%);

                    z-index: 1000;

                }
            
            `}</style>
        </>
    )

}