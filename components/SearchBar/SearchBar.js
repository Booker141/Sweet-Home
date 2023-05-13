import {fonts, colors} from "styles/frontend-conf"
import Router from "next/router"
import global from "styles/global.module.css"
import {HiSearch} from "react-icons/hi"
import {useState} from "react"
import {server} from "/server"


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

      const encodedKeyword = encodeURIComponent(keyword)

      Router.push(`${server}/search?keyword=${encodedKeyword}`);

    }



    return(
        <>
        <form className='search-bar'>
          <input
                  type='search'
                  name='search'
                  value={keyword}
                  placeholder='Buscar en Sweet Home'
                  onChange={(e) => setKeyword(e.target.value)}
                /><button className={global.searchButton} aria-label="Hacer búsqueda relacionada" onClick={() => searchKeyword()}><HiSearch size={20}/></button>
        </form>

              

        <style jsx>{`

        .search-bar{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1rem;



          }

          .search-bar__icon{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;

          }



          input[type="search"]{

            /*Box model*/

            width: 27vw;
            height: 2vh;
            padding: 1rem;


            /*Text*/

            font-family: ${fonts.default};
            font-size: 0.9rem;

            /*Visuals*/

            border-radius: 50px;
            background: white;
            border: none;
            transition: 0.3s ease-in-out all;
            box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);



          }


            input[type="search"]:focus{


              /*Visuals*/

              border: 2px solid #4d97f7;
              outline: none;
              box-shadow: 10px 10px 20px 0px rgba(176,176,176,0.66);

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