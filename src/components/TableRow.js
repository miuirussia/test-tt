import React, {Component} from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.company}</td>
                <td>{this.props.item.age}</td>
                <td>{this.props.item.gender}</td>
                <td>{this.props.item.occupation}</td>
            </tr>
        );
    }
}

export default TableRow;