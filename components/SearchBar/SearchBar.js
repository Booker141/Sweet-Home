import {colors} from "styles/frontend-conf"
import {fonts} from "styles/frontend-conf"
import {RiSearchLine} from "react-icons/ri"
import {useState, useEffect} from "react"


export default function SearchBar(){

    const [search, setSearch] = useState('');

    useEffect(() => {
    
    }, [])

    const searchPost = (e) => {
        /*Búsqueda por usuario*/
        /*Búsqueda por localización*/
        if(e.target.value === ''){
            console.log('No hay nada que buscar')
        }else{
            console.log('Buscando..')
        }

    }



    return(

        <>
        <div className='search-bar'>
          <div className='search-bar__icon'>
            <RiSearchLine size={20} color={colors.primary} />
          </div>
          <input
            type='search'
            name='search'
            value={search}
            placeholder='Buscar..'
            onBlur={(e) => searchPost(e)}
            onKeyUp={(e) => searchPost(e)}
            onChange={(e) => setSearch(e.target.value)}
          />
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
            padding: 0.4rem;

            /*Text*/

            font-family: ${fonts.default};
            font-size: 1rem;

            /*Visuals*/

            border-radius: 5px;
            border: 1px solid ${colors.primary};
            background: transparent;
            transition: 0.2s ease all;


          }

            input[type="search"]:focus{


            /*Visuals*/

            border: 2px solid ${colors.primary};
            outline: none;
            box-shadow: 5px 10px 12px 0px rgba(153,153,153,0.65);

            }

            ::placeholder{

                /*Text*/

                color: ${colors.primary};

                }
        
        
        `}
        </style>
    </>
    )
}