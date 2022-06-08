import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import {fonts} from 'styles/frontend-conf.js'
import {colors} from 'styles/frontend-conf.js'


/**
 * @author Sergio García Navarro
 * @returns about page
 */
export default function About () {

    return(

            <Layout>
                <>

                    <Header url1='index.js' url2='pages/Attendances' url3='pages/Info' url4='pages/Contact' 
                        text1='Inicio' text2='Cuidados' text3='Quiénes somos' text4='Contacto' />
                    
                    <h1 class="title">Sobre nosotros</h1>
                    <h2 class="secondary">Somos una empresa que se preocupa desde primera instancia por los 
                    cuidados animales y su bienestar, por lo que decidimos desarrollar un 
                    espacio exclusivamente para ellos</h2>

                    <p class="text">Desde 2022 estamos intentando facilitar el proceso de adopción y las tareas diarias
                    para las personas que posean mascotas o bien tienen planteado tener alguna en el futuro. Desde crear el
                    una publicación contando que has perdido a tu mascota o para compartir con el mundo los cuidados que les aplicas diariamente </p>
                    <style jsx>{`

                            .title{
                                color:'${colors.primary}';
                                align-items: center;
                                font-family: ${fonts.default};
                            }

                            .secondary{

                                color:'${colors.quaternary}';
                                align-items: center;
                                font-family: '${fonts.secondary}';

                            }

                            .text{

                                display:block;
                                font-family: '${fonts.secondary}'; 

                            }

            
                    `}</style>
                </>
            </Layout>

    )

} 