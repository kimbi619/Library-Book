// import {useState} from 'react'
import MainPanel from './Main/MainPanel';
import {Route, Switch} from 'react-router-dom';
import Letter from './Main/Letter';
import Loans from './Main/Loans';
import Books from './Main/Books';
import { LoanBookProvider } from './Main/LoanBookContext';
import Login from './Login';
import Signup from './Main/Signup';
import ChatSection from './Main/ChatSection';

function Main(){
    
    
    return(
            <LoanBookProvider>
            <div id ="main">
                <MainPanel />
                <Switch>
                    <Route path = '/login'><Login /></Route>
                    <Route path = '/create-account'><Signup /></Route>
                    <Route path = '/loanedbooks'><Loans /></Route>
                    <Route path = '/allbooks'><Books /></Route>
                    <Route path = "/chat-with-admin"><ChatSection /></Route>
                </Switch>
                <Letter />
            </div>
            </LoanBookProvider>
    )
}

export default Main;
