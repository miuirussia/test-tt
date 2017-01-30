import React from 'react';

const ItemPerPage = ({onItemPerPageChange, perPage}) => {
    return (
        <div className="form-group">
            <label>Количество элементов на странице:</label>
            <select className="form-control" onChange={onItemPerPageChange} value={perPage}>
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
            </select>
        </div>
    );
};

export default ItemPerPage;