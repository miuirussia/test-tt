import React from 'react';
import './Paginator.css';

const Paginator = ({onBack, onNext, currentPage, totalPages}) => {
    return (
        <div className="paginator">
            <a className="btn btn-default" onClick={onBack}><span>&larr;</span> Назад</a>
            <span className="current">{ currentPage } / { totalPages }</span>
            <a className="btn btn-default" onClick={onNext}>Вперед <span>&rarr;</span></a>
        </div>
    );
};

export default Paginator;