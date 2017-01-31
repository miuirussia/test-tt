import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Pagination polyfill
if(!Array.prototype.paginate) {
    Array.prototype.paginate = function (page = 1, perPage = 20) { // eslint-disable-line
        const totalPages = Math.ceil(this.length / perPage);
        const currentPage = (page > totalPages && totalPages > 0) ? totalPages : page;
        const offset = (currentPage - 1) * perPage;
        return {
            currentPage: currentPage,
            perPage: perPage,
            total: this.length,
            totalPages: totalPages,
            data: this.slice(offset, offset + perPage)
        }
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
