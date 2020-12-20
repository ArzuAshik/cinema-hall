import React, { useContext } from 'react';
import { SearchDateTimeContext } from '../../App';
import SearchItem from '../SearchItem/SearchItem';

const SearchResult = () => {
    const [searchDateTime, setSearchDateTime] = useContext(SearchDateTimeContext);
    return (
        searchDateTime.date ?
        <div>
            <div className="row mt-3">
                <div className="col-md-3">
                    <SearchItem/>
                </div>
                <div className="col-md-3">
                    <SearchItem/>
                </div>
                <div className="col-md-3">
                    <SearchItem/>
                </div>
                <div className="col-md-3">
                    <SearchItem/>
                </div>
                <div className="col-md-3">
                    <SearchItem/>
                </div>
                <div className="col-md-3">
                    <SearchItem/>
                </div>
                <div className="col-md-3">
                    <SearchItem/>
                </div>                
                <div className="col-md-3">
                    <SearchItem/>
                </div>
            </div>
        </div>
        :
            <div className="search-msg">
                <p>Please Select a Date</p>
            </div>
        
    );
};

export default SearchResult;