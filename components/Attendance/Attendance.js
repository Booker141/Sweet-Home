import global from '/styles/global.module.css'
export default function Attendance (props) {
  console.log(props)

  return (
    <>
      <div className='attendance'>
        <div className='attendance__user'>
          <img src={props.user.image} />
          <div className={global.text2__bold}>
            {props.user.username}
          </div>
        </div>
        <div className={global.text2}>
          {props.description}
        </div>
      </div>

    </>
  )
}
