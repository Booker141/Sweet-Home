import {fonts} from "styles/frontend-conf"
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
export default function SearchBar(props){

    const [keyword, setKeyword] = useState('');
    const [isActive, setIsActive] = useState(false);


    /**
     * It toggles the display of the search bar.
     */
    const displaySearch = () => {
        setIsActive(!isActive);
        document.addEventListener("DOMContentLoaded", function () { 
          if(isActive){
            document.getElementById('search').style.display = "none"
          }else{
            document.getElementById('search').style.display = "flex"
          }
       })
        
    }

    const searchKeyword = () => {

      Router.push(`/search?keyword=${encodeURIComponent(search)}`);

    }


    return(
        <>
        <div className='search-bar'>
          <div className='search-bar__icon'>
            <button onClick={() => displaySearch()}><RiSearchLine size={20} color={props.color} /></button>
          </div>
          {isActive &&
            <search id='search' className="search-bar__input">
            <input
              type='search'
              name='search'
              value={keyword}
              placeholder='Buscar..'
              onChange={(e) => setKeyword(e.target.value)}
            /><button className={global.searchButton} aria-label="Hacer búsqueda relacionada" onClick={() => searchKeyword()}>Buscar</button></search>}

        </div>
        <style jsx>{`

        .search-bar{

            /*Box model*/

            display: flex;
            flex-direction: row;
            width: 20vw;

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

            width: fit-content;
            height: 2rem;


            /*Text*/

            font-family: ${fonts.default};
            font-size: 1rem;

            /*Visuals*/

            border-radius: 50px;
            background: ${props.color};
            border: none;
            transition: 0.2s ease all;


          }


            input[type="search"]:focus{


            /*Visuals*/

            border: 2px solid ${props.color};
            outline: none;
            box-shadow: 5px 10px 12px 0px rgba(153,153,153,0.65);

            }

            ::placeholder{

                /*Text*/

                color: #f0810f;
                margin-left: 1rem;

              }

              button{

                /*Visuals*/

                background: transparent;
                border: none;
                cursor: pointer;


              }
        
        
        `}
        </style>
    </>
    )
}