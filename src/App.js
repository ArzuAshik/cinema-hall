import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createContext, useState } from 'react';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import { findDate } from './functions';


export const SearchDateTimeContext = createContext();
export const UserContext = createContext();
function App() {
  const [searchDateTime, setSearchDateTime] = useState({date: findDate(0), time: "10AM to 12AM"});
  const [loggedInUser, setLoggedInUser] = useState({ email: '' });
  return (
    <SearchDateTimeContext.Provider value={[searchDateTime, setSearchDateTime]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking/>
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </SearchDateTimeContext.Provider>
  );
}

export default App;
