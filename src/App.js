import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import { BookContextProvider } from './Components/Main/BookContext';
import { SearchContextProvider } from './Components/SearchContext';

function App() {

  return (
    // <SearchContextProvider>
      <BookContextProvider>
        <div className="App">
          <NavBar />
          <Main />
        </div>
      </BookContextProvider>
    // </SearchContextProvider>
  );
  
}

export default App;
