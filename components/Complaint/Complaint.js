import global from '/styles/global.module.css'
import {useEffect, useState} from 'react'

// key={_id} description={description} adminId={adminId} createdAt={createdAt} isApproved={isApproved} isChecked={isChecked}
export default function Complaint (props) {


  return (
      <>
        <div className={global.complaint}>
          <div className="complaint__header">
            <p className={global.title4}>De: {props.usernameFrom}</p>
            <p className={global.title4}>Para: {props.usernameTo}</p>
            <p className={global.title4}>Fecha: {props.createdAt}</p>
          </div>
          <div className="complaint__body">
            <p className={global.title4}>Descripción: {props.description}</p>
          </div>
        </div>
        <style jsx>{`
        
          .complaint__header{

            /*Box model*/

            display: flex;
            flex-direction: row;
            justify-content: space-between;

          }

          .complaint__body{


            /*Box model*/

            display: flex;
            flex-direction: row;
            justify-content: space-between;

          }
        
        `}</style>
      </>

  )
}
