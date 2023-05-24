/* Static imports */

import {fonts, colors} from "styles/frontend-conf"
import {HiSearch, HiOutlineInformationCircle} from "react-icons/hi"
import {MdClose} from 'react-icons/md'
import {useState} from "react"
import {server} from "/server"
import global from "styles/global.module.css"
import dynamic from 'next/dynamic'

/* Dynamic imports */

const Router = dynamic(() => import('next/router'))
const UserCardSearch = dynamic(() => import('/components/UserCardSearch/UserCardSearch'))
const Link = dynamic(() => import('next/link'))
const LazyLoad = dynamic(() => import('react-lazyload'))




export default function SearchBar(){

    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState({});
    const [isOpen, setIsOpen] = useState(false);


    const searchKeyword = () => {

      const searchInput = document.getElementById('search').value

      setKeyword(searchInput)

      const encodedKeyword = encodeURIComponent(searchInput)

      Router.push(`${server}/search?keyword=${encodedKeyword}`);

    }


    const submenuResults = async (e) => {
      
      e.preventDefault()

      setKeyword(e.target.value)
      setIsOpen(true)

      const search = document.getElementById('search');

      search.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

          searchKeyword()

        }
      });

      if(e.target.value === '')
        setResults({})
        

      const res = await fetch(`${server}/api/search/${keyword}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          }
      })

      const data = await res.json()

      setResults(data)

    }



    return(
        <>
          <form className='search-bar'>
            <input
                    type='search'
                    name='keyword'
                    id='search'
                    value={keyword}
                    placeholder='Buscar en Sweet Home'
                    onChange={(e) => submenuResults(e)}
                    autoComplete='on'
                  /><button id="search__button" className={global.searchButton} aria-label="Hacer búsqueda relacionada" onClick={() => searchKeyword()}><HiSearch size={20}/></button>
          </form>
          {isOpen && <div id="submenu" className="submenu">
            
            <div className="submenu__title">
              <HiSearch size={18} color={`${colors.quaternary}`}/>
              <h3 className={global.text4__bold}>Buscar {keyword}..</h3>
              <button className="close__submenu" onClick={() => setIsOpen(false)}><MdClose size={30} color={`${colors.primary}`}/></button>
            </div>
            <hr className={global.line}></hr>
            <div className="submenu__results">

                {results.usersByUsername && results.usersByUsername.map((user) => (
                  <>
                    <div className="search__user">
                      <HiSearch size={18} color={`${colors.quaternary}`}/>
                      <UserCardSearch key={user._id} image={user.image} banner={user.banner} username={user.username} role={user.role} />
                    </div>
                  </>
                ))}

                {results.typeAttendanceByTitle && results.typeAttendanceByTitle.map((type) => (
                  <>
                    <div className="search__typeAttendance">
                      <HiSearch size={18} color={`${colors.quaternary}`}/>
                      <div className="typeAttendance">
                        <Link href={`${server}/attendances/${type.name}`}><a>#{type.name}</a></Link>
                      </div>
                    </div>                  
                  </>
                ))}         
              </div>
              {results.usersByUsername?.length === 0 && results.typeAttendanceByTitle?.length === 0 &&
              <div className="submenu__default">
                <HiOutlineInformationCircle size={60} color={`${colors.quaternary}`}/>
                <p className={global.text4}>No se ha encontrado ningún resultado</p>
                <p className={global.text4}>Inténtalo con otra palabra clave</p>
              </div>}
          </div>}


        <style jsx>{`



          .close__submenu{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            

            /*Visuals*/

            cursor: pointer;
            background: transparent;
            border: none;

          }


          .submenu{

            /*Box model*/

            display: block;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 5rem;
            width: 25vw;
            height: 40vh;
            padding: 1rem;

            /*Visuals*/

            background: white;
            border-radius: 20px;
            box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
            overflow-y: auto;

          }

          .search__typeAttendance{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;
          }

          .search__user{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

          }

          .submenu__default{

            /*Box model*/

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 2rem;
            gap: 0.1rem;

          }

          .submenu__title{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          
          }

          .submenu__results{

            /*Box model*/

            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
          }

        .search-bar{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1rem;

          }

          .typeAttendance{

            /*Box model*/

            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0.5rem;

            /*Text*/

            font-family: ${fonts.default};
            font-size: 0.9rem;
            color: ${colors.secondary};

            /*Visuals*/

            border-radius: 20px;
            background-color: ${colors.primary};
            box-shadow: 0px 5px 10px 0px rgba(168,97,20,1);
          }

          .typeAttendance a{

            /*Text*/

            font-family: ${fonts.default};
            font-size: 0.9rem;
            color: ${colors.secondary};

            /*Visuals*/

            text-decoration: none;

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

              hr{

                /*Box model*/

                width: 100%;
              }
        
        
        `}
        </style>
    </>
    )
}