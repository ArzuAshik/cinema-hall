import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchDateTimeContext } from '../../App';

const Navbar = () => {
    const dates = [];
    for(let i = 0; i < 3; i++) {
        dates.push(findDate(i));
    }
    const [searchDateTime, setSearchDateTime] = useContext(SearchDateTimeContext);
    const [selectedDateTime, setSelectedDateTime] = useState({date: dates[0], time: "1"});

    // eventHandlers
    function handleSelectDateTime(e){
        let newDateTime = {...selectedDateTime};
        newDateTime[e.target.name] = e.target.value;
        setSelectedDateTime(newDateTime);
    }
    function handleSearch(e){
        e.preventDefault();
        setSearchDateTime(selectedDateTime);
    }

    // functions
    function findDate(next) {
        let nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + next);
        const fullDate = `${nextDay.getDate()} ${findMonth(nextDay.getMonth())} ${nextDay.getFullYear()}`;
        return fullDate;
    }

    function findMonth(month){
        const monthString = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthString[month];
    }
    

// test
console.log(searchDateTime);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-md-4">
                <Link to="/" className="navbar-brand">Cinema Ticket</Link>
            </div>
            <div className="col-md-8">
                <div className="search">
                    <form onSubmit={(e) => handleSearch(e)} className="form-inline">
                        <select onChange={(e) => handleSelectDateTime(e)} name="date" className="form-control m-2">
                            {
                                dates.map(date => <option key={date} value={date}>{date}</option>)
                            }
                        </select>
                        <select onChange={(e) => handleSelectDateTime(e)} name="time" className="form-control m-2">
                            <option value="1">10AM to 12AM</option>
                            <option value="2">1PM to 3PM</option>
                            <option value="3">5PM to 7PM</option>
                            <option value="4">9PM to 11PM</option>
                        </select>
                        <button className="btn btn-primary m-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;