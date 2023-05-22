import global from 'styles/global.module.css'
import {useEffect, useState} from 'react'

export default function ChatSidebar(){

    const [chats, setChats] = useState({})

    useEffect(() => {
        setChats(chats)
    }, [])

    return(
        <>
            <div className={global.sidebar}>
                <div className="username__info">
                    
                </div>
                {chats.length === 0 && <div className={global.text}>No hay chats abiertos.</div>}
                {chats.filter((sender, receiver) => (sender === session.user.username || receiver === session.user.username)).map((sender, receiver, messages) => {
                    <Avatar sender={sender} receiver={receiver} messages={messages}/>
                })}
            </div>
        </>
    )
}