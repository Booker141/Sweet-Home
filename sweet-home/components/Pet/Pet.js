import global from "../../styles/global.module.css"


export default function Pet(props){

    return(
        <>
            <div className={global.pet}>
                <div className="pet__header">
                    <div className="pet__image">
                        {props.image}
                    </div>
                    <div className="pet__info">
                        <div className="pet__name">
                            <h1 className={global.title2}>Nombre: {props.name}</h1>
                        </div>
                        <div className="pet__age">
                            <p className={global.text2}>Año de nacimiento: {props.birthYear}</p>
                        </div>
                    </div>
                </div>
                <div className="pet__owner">
                    <p className={global.text2}>Dueño: {props.ownerUsername}</p>
                </div>
                <div className="pet__weight">
                    <p className={global.text2}>Peso: {props.weight}</p>
                </div>
            </div> 
        </>
    )


}