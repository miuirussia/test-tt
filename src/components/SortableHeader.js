import React, {Component} from 'react';

class SortableHeader extends Component {
    render() {
        return (
            <thead>
            <tr>
                {Object.keys(this.props.headers).map((item) => {
                    return <th key={item} id={item} onClick={this.props.onSort}>{this.props.headers[item]}</th>
                })}
            </tr>
            </thead>
        );
    }
}

export default SortableHeader;