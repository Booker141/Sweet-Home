import global from 'styles/global.module.css'

/**
 * This function takes in a question object and returns a div with the question's title and description
 * @param props - This is the object that contains all the data that was passed to the component.
 * @returns A function that returns a JSX element.
 */
export default function Question (props) {
  return (

    <>

      <div key={props._id} className={global.question}>
        <h2 className={global.secondary2}>{props.title}</h2>
        <p className={global.text2}>{props.description}</p>
      </div>

      <style jsx>{`


            `}
      </style>
    </>

  )
}
