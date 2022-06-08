import Trademark from 'components/Trademark/Trademark'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Layout from 'components/Layout/Layout'
import Button from 'components/Button/Button'

export default function Home({posts}) {

  console.log(posts);

  return(

    <Layout>
      <>
        <Trademark/>

        <Header/>
        <Button href='/Login'>Iniciar sesión</Button>

        <div>
          {/*
            posts.map(({_id, userImage, username, location, mediaUrl, description, comments}) => {
              return (
                <>
                  <div key={_id}>
                    {username}
                  </div>
                  <div>
                    {location}
                  </div>
                  <div>
                    {mediaUrl}
                  </div>
                  <div>
                    {description}
                  </div>
                  <div>
                    {comments}
                  </div>
                </>
              )
            })*/
          }
        </div>
        <Footer/>
      </>
    </Layout>

  )
}

