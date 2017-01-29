import React, {Component} from 'react';
import './Paginator.css';

class Paginator extends Component {
    render() {
        return (
            <div className="paginator">
                <a className="btn btn-default" onClick={this.props.onBack}><span>&larr;</span> Назад</a>
                <span className="current">{ this.props.currentPage } / { this.props.totalPages }</span>
                <a className="btn btn-default" onClick={this.props.onNext}>Вперед <span>&rarr;</span></a>
            </div>
        );
    }
}

export default Paginator;