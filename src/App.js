import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { createContext, useState } from 'react';


export const SearchDateTimeContext = createContext();
function App() {
  const [searchDateTime, setSearchDateTime] = useState({});
  return (
    <SearchDateTimeContext.Provider value={[searchDateTime, setSearchDateTime]}>
      <Router>
        <p>Date: {searchDateTime.date}</p>
        <p>Time: {searchDateTime.time}</p>
        <Home/>
      </Router>
    </SearchDateTimeContext.Provider>
  );
}

export default App;
