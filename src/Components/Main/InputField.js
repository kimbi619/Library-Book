import React from 'react'

const InputField = ({ submitData }) => {
   
    return (
        <div className = "inputSection">
            <form method="POST" onSubmit={submitData}>
                <textarea cols="60" rows="5" placeholder="Enter message here........" />
                <button type="submit" id="textSubmit">Send</button>
            </form>
        </div>
    )
}

export default InputField;
