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
                            <h1 className={global.text2}>Nombre: {props.name}</h1>
                        </div>
                        <div className="pet__animal">
                            <h1 className={global.text2}>Animal: {props.animal}</h1>
                        </div>
                        <div className="pet__breed">
                            <h1 className={global.text2}>Raza: {props.breed}</h1>
                        </div>
                        <div className="pet__age">
                            <h1 className={global.text2}>Año de nacimiento: {props.birthYear}</h1>
                        </div>
                    </div>
                </div>
                <div className="pet__owner">
                    <h1 className={global.text2}>Dueño: @{props.ownerUsername}</h1>
                </div>
                <div className="pet__weight">
                    <h1 className={global.text2}>Peso: {props.weight}</h1>
                </div>
            </div> 
        </>
    )


}