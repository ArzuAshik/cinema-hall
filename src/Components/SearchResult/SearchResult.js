import React, { useContext, useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import { SearchDateTimeContext } from '../../App';
import SearchItem from '../SearchItem/SearchItem';

const SearchResult = () => {
    const [searchDateTime, setSearchDateTime] = useContext(SearchDateTimeContext);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
        console.log(searchDateTime);
        fetch("https://ar-cinema-hall-server.herokuapp.com/movies",{
            method: "POST",
            body: JSON.stringify({ date: searchDateTime.date }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then((response) => response.json())
        .then(data => {
            setMovies(data);
            console.log(data);
            setIsLoading(false);
        });
    }, [searchDateTime])
    return (
        isLoading ? <div className="loading"><MoonLoader /></div>  : 
        movies.length > 0 ?
        <div>
            <div className="row mt-3">                
                {movies.map( movie => <SearchItem key={movie._id} movie={movie}/>)}              
            </div>
        </div>
        :
        <div className="search-msg">
            <p>Please Select a Date</p>
        </div>
        
    );
};

export default SearchResult;