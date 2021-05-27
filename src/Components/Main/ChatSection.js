import Chatbot from 'react-chatbot-kit'
import './ChatSection.css';
import InputField from './InputField';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'



import ActionProvider from './ChatBot/ActionProvider';
import MessageParser from './ChatBot/MessageParser';
import config from './ChatBot/config';
import ChatField from './ChatField';

const onSubmitData=(data)=>{
    data.preventDefault();
    const response = data.target.querySelector('textarea').value;

    return response;
}

const ChatSection = () => {
    return (
        <div className = "chatSection">
            {/* <SimpleBar  forceVisible="y" autoHide={false}> */}
                <ChatField />
                <ChatField />
                <ChatField mySend={true} />
                <ChatField mySend={true} />
            {/* </SimpleBar> */}
                <InputField submitData={onSubmitData} />


            {/* build chat app with react chatbot... Not what We Wanted */}
            {/* <Chatbot config = {config} actionProvider={ActionProvider} messageParser={MessageParser} /> */}
        </div>
    )
}

export default ChatSection
