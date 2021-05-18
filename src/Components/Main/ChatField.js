import React from 'react'

const ChatField = ({ mySend }) => {
    return (
        <div className={`${mySend? "mySend": ""}`}>
            <div className = "chat">
                this is where the message goes
            </div>
        </div>
    )
}

export default ChatField
