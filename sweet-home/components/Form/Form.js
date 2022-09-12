
/*
    * @author Sergio García Navarro
    * @returns Form component
    * @version 1.0
    * @date 13/01/2020
    * @description Form component
*/
/**
 * FormLogin is the component that contains the form
 * @returns {Form} - form
 */

export default function Form(props) {
  return (
    <>
      <form className="form" onSubmit={props.onSubmit}>
        {props.children}
      </form>  
      <style jsx>{`

      `}</style> 
    </>

  );
}
