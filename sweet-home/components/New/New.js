import global from "styles/global.module.css"


export default function New(props){


    return (
        <>

            <div key={props._id} className={global.new}>
                <article>
                    <h2 className={global.secondary}>{props.title}</h2>
                    <h3 className={global.tertiary}>{props.date}</h3>
                    <h3 className={global.tertiary}>{props.author}</h3>
                            <p className={global.text}>{props.introduction}</p>
                            <p className={global.text}>{props.body}</p>
                            <p className={global.text}>{props.body2}</p>
                            <p className={global.text}>{props.body3}</p>
                            <p className={global.text}>{props.conclusion}</p>
                </article>
            </div>
            <style jsx>{`


                .post__header{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;

                }

                .text{

                    /*Box model*/

                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }

                .buttonTertiary{

                    /*Box model*/

                    display: flex;
                    float: right;
                }
            
            `}</style>

        </>

    )
}