import React, {Component} from 'react';

class ItemPerPage extends Component {
    render() {
        return (
            <select className="form-control" onChange={this.props.onItemPerPageChange} value={this.props.perPage}>
                <option>5</option>
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
            </select>
        );
    }
}

export default ItemPerPage;