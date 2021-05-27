import React from 'react'

const ChatField = ({ mySend }) => {
    return (
        <div className={`${mySend? "mySend": ""}`}>
            <div className = "chat">
                <div className="msg">this is where the message goes</div>
                <span className="time">9: 23am</span>
            </div>
        </div>
    )
}

export default ChatField
