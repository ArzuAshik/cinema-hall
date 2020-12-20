import React from 'react';
import SearchItem from '../SearchItem/SearchItem';

const SearchResult = () => {
    return (
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
    );
};

export default SearchResult;