import React, { useContext } from 'react';
import { SearchDateTimeContext } from '../../App';

const SearchItem = ({movie}) => {
    const [searchDateTime, setSearchDateTime] = useContext(SearchDateTimeContext);
    return (
        <div className="card mb-3">
            <img src="https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg" alt="" className="card-img-top"></img>
        <div className="card-body">
        <h5 className="card-title">{searchDateTime.date}</h5>
        </div>
        </div>
    );
};

export default SearchItem;