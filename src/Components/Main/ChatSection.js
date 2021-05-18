import Chatbot from 'react-chatbot-kit'
import './ChatSection.css';
import InputField from './InputField';



import ActionProvider from './ChatBot/ActionProvider';
import MessageParser from './ChatBot/MessageParser';
import config from './ChatBot/config';
import ChatField from './ChatField';

const onSubmitData=(data)=>{
    data.preventDefault();
    const res = data.target.querySelector('textarea').value;
    return res;
}

const ChatSection = () => {
    return (
        <div className = "chatSection">
            <ChatField />
            <ChatField />
            <ChatField mySend={true} />
            <ChatField mySend={true} />
            <InputField submitData={onSubmitData} />


            {/* build chat app with react chatbot... Not what We Wanted */}
            {/* <Chatbot config = {config} actionProvider={ActionProvider} messageParser={MessageParser} /> */}
        </div>
    )
}

export default ChatSection
