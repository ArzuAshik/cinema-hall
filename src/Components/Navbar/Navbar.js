import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-md-4">
                <a class="navbar-brand" href="#">Cinema Ticket</a>
            </div>
            <div className="col-md-8">
                <div className="search">
                    <form className="form-inline">
                        <input type="date" className="form-control mx-2"/>
                        <select name="time" id="time" className="form-control mx-2">
                            <option value="1">10AM to 12AM</option>
                            <option value="2">1PM to 3PM</option>
                            <option value="3">5PM to 7PM</option>
                            <option value="3">9PM to 11PM</option>
                        </select>
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;