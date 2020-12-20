import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({movie}) => {    
    console.log(movie);
    return (
        <div className="col-md-3">
            <div className="card mb-3">
                <img src={movie.img} alt={movie.title}></img>
                <div className="card-body">
                    <h5 className="card-title"><Link to={`/booking/${movie._id}`}>{movie.title}</Link></h5>
                </div>
            </div>
        </div>
);
};

export default SearchItem;