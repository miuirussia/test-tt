import React, {Component} from 'react';

class ControlBox extends Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Поиск:</label>
                    <input className="form-control search" id="search" type="text" onChange={this.props.onSearch}/>
                </div>
                <div className="form-group">
                    <button className="form-control btn btn-primary" onClick={this.props.onExport}>Экспорт в CSV
                    </button>
                </div>
            </div>
        );
    }
}

export default ControlBox;