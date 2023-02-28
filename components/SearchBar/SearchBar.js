import {colors} from "styles/frontend-conf"
import {fonts} from "styles/frontend-conf"
import {RiSearchLine} from "react-icons/ri"
import {useState, useEffect} from "react"


export default function SearchBar(props){

    const [search, setSearch] = useState('');
    const [isActive, setIsActive] = useState(false);


    const displaySearch = () => {
        setIsActive(!isActive);
    }

    const searchKeyword = (e) => {
        if(e){
            if(e.key === 'Enter'){
                console.log(search)
            }
        }else{
            console.log(search)
        }

    }


    return(
        <>
        <div className='search-bar'>
          <div className='search-bar__icon'>
            <button onClick={() => displaySearch()}><RiSearchLine size={20} color={props.color} /></button>
          </div>
          {isActive &&
            <div className="search-bar__input">
            <input
              type='search'
              name='search'
              value={search}
              placeholder='Buscar..'
              onBlur={(e) => searchKeyword(e)}
              onKeyUp={(e) => searchKeyword(e)}
              onChange={(e) => setSearch(e.target.value)}
            /><button className={global.buttonTertiary} aria-label="Hacer búsqueda relacionada" onClick={() => search()}>Buscar</button></div>}

        </div>
        <style jsx>{`

        .search-bar{

            /*Box model*/

            display: flex;
            flex-direction: row;
            width: 26rem;

          }

          .search-bar__icon{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            margin-right: 0.5rem;

          }

          input[type="search"]{

            /*Box model*/

            width: 100%;
            height: 2rem;


            /*Text*/

            font-family: ${fonts.default};
            font-size: 1rem;

            /*Visuals*/

            border-radius: 5px;
            border: 1px solid ${props.color};
            background: transparent;
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

                color: ${props.color};

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