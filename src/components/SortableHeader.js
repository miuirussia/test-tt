import React from 'react';

const SortableHeader = ({headers, onSort}) => {
    return (
        <thead>
        <tr>
            {Object.keys(headers).map((item) => {
                return <th key={item} id={item} onClick={onSort}>{headers[item]}</th>
            })}
        </tr>
        </thead>
    );
};

export default SortableHeader;