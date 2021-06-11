import React from 'react'
import Classes from './Message.module.css';

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={Classes.container}>
            <img src={props.avatar} alt={`Avatar of ${props.name}`} className={Classes.avatar}/>
            <div className={Classes.message}>
                <div className={Classes.message__body}>
                    <span className={Classes.message__author}>{props.name}</span>
                    <p className={Classes.message__text}>{props.message}</p>
                </div>
                <time className={Classes.message__time}>{props.time}</time>
            </div>
        </div>
    )
}

export default Message
