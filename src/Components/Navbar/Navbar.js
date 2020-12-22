import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchDateTimeContext, UserContext } from '../../App';
import { handleSelectDateTime, handleSearch, findDate } from '../../functions';

const Navbar = () => {
    const dates = [];
    for(let i = 0; i < 3; i++) {
        dates.push(findDate(i));
    }
    const [searchDateTime, setSearchDateTime] = useContext(SearchDateTimeContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [selectedDateTime, setSelectedDateTime] = useState(searchDateTime);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-md-3">
                <Link to="/" className="navbar-brand">Cinema Ticket</Link>
            </div>
            <div className="col-md-6">
                <div className="search">
                    <form onSubmit={(e) => handleSearch(selectedDateTime, setSearchDateTime, e)} className="form-inline">
                        <select value={selectedDateTime.date} onChange={(e) => handleSelectDateTime(selectedDateTime, setSelectedDateTime, e)} name="date" className="form-control m-2">
                            {
                                dates.map(date => <option key={date} value={date}>{date}</option>)
                            }
                        </select>
                        <select value={selectedDateTime.time} onChange={(e) => handleSelectDateTime(selectedDateTime, setSelectedDateTime, e)} name="time" className="form-control m-2">
                            <option value="10AM to 12AM">10AM to 12AM</option>
                            <option value="1PM to 3PM">1PM to 3PM</option>
                            <option value="5PM to 7PM">5PM to 7PM</option>
                            <option value="9PM to 11PM">9PM to 11PM</option>
                        </select>
                        <button className="btn btn-primary m-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="col-md-3">
                {
                loggedInUser.email ? loggedInUser.email : <Link to="/login">Login</Link>
            }
            </div>
            
        </nav>
    );
};

export default Navbar;