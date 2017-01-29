import React, {Component} from 'react';

class OutputArea extends Component {
    render() {
        return (
            <div className="form-group">
                <textarea className="form-control" rows="3" value={ this.props.text }/>
            </div>
        );
    }
}

export default OutputArea;