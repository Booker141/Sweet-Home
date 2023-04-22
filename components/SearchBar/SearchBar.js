import {fonts, colors} from "styles/frontend-conf"
import Router from "next/router"
import global from "styles/global.module.css"
import {RiSearchLine} from "react-icons/ri"
import {useState} from "react"


/**
 * It's a search bar that displays a search icon and when clicked, it displays a search input and a
 * search button
 * @param props - This is the props object that is passed to the component.
 * @returns A search bar component.
 */
export default function SearchBar(){

    const [keyword, setKeyword] = useState('');


    /**
     * It toggles the display of the search bar.
     */
   

    const searchKeyword = () => {

      Router.push(`/search?keyword=${encodeURIComponent(search)}`);

    }


    return(
        <>
        <div className='search-bar'>
            <search id='search' className="search-bar__input">
              <input
                type='search'
                name='search'
                value={keyword}
                placeholder='Buscar..'
                onChange={(e) => setKeyword(e.target.value)}
              /><button className={global.searchButton} aria-label="Hacer búsqueda relacionada" onClick={() => searchKeyword()}><RiSearchLine size={20}/></button>
            </search>
        </div>
        <style jsx>{`

        .search-bar{

            /*Box model*/

            display: flex;
            flex-direction: row;

          }

          .search-bar__icon{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-right: 0.5rem;

          }

          .search-bar__input{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

          }

          input[type="search"]{

            /*Box model*/

            width: 27vw;
            height: 2vh;
            padding: 1rem;


            /*Text*/

            font-family: ${fonts.default};
            font-size: 1rem;

            /*Visuals*/

            border-radius: 50px;
            background: white;
            border: none;
            transition: 0.2s ease all;


          }


            input[type="search"]:focus{


            /*Visuals*/

            outline: none;
            box-shadow: 5px 10px 12px 0px rgba(153,153,153,0.65);

            }

            ::placeholder{

                /*Text*/

                color: #f0810f;
                margin-left: 1rem;

              }

              button{

                /*Position*/

                position: relative;
                right: 5rem;

                /*Visuals*/

                background: transparent;
                border-left: 2px solid ${colors.primary};
                border-top: 0;
                border-right: 0;
                border-bottom: 0;
                cursor: pointer;


              }
        
        
        `}
        </style>
    </>
    )
}