import React from 'react';

const TableRow = ({item}) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.company}</td>
            <td>{item.age}</td>
            <td>{item.gender}</td>
            <td>{item.occupation}</td>
        </tr>
    );
};

export default TableRow;