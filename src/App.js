import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import {useState, useContext } from 'react'
import { BookContextProvider } from './Components/Main/BookContext'
import TestResize from './Components/TestResize';

function App() {

 

  return (
    <BookContextProvider>
      <div className="App">
        <NavBar />
        <Main />
      </div>
    </BookContextProvider>
    // <TestResize />
  );
}

export default App;
