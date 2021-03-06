import React from 'react';

const SearchBox = ({onSearch}) => {
    return (
        <div className="form-group">
            <label>Фильтр:</label>
            <input className="form-control search" id="search" type="text" onChange={onSearch}/>
        </div>
    );
};

export default SearchBox;
