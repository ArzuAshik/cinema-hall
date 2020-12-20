import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createContext, useState } from 'react';
import Booking from './Components/Booking/Booking';


export const SearchDateTimeContext = createContext();
function App() {
  const [searchDateTime, setSearchDateTime] = useState({});
  return (
    <SearchDateTimeContext.Provider value={[searchDateTime, setSearchDateTime]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <p>Date: {searchDateTime.date}</p>
            <p>Time: {searchDateTime.time}</p>
            <Home/>
          </Route>
          <Route path="/booking/:id">
            <Booking/>
          </Route>
        </Switch>
      </Router>
    </SearchDateTimeContext.Provider>
  );
}

export default App;
