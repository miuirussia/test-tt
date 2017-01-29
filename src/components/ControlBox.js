import React from 'react';

const ControlBox = ({onSearch, onExport}) => {
    return (
        <div>
            <div className="form-group">
                <label>Поиск:</label>
                <input className="form-control search" id="search" type="text" onChange={onSearch}/>
            </div>
            <div className="form-group">
                <button className="form-control btn btn-primary" onClick={onExport}>Экспорт в CSV
                </button>
            </div>
        </div>
    );
};

export default ControlBox;