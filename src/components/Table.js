import React, {Component} from 'react';
import csv from 'fast-csv';
import ControlBox from './ControlBox';
import Paginator from './Paginator';
import Row from './TableRow';
import OutputArea from './OutputArea';
import SortableHeader from './SortableHeader';
import ItemPerPage from './ItemPerPage';
import * as Utils from '../utils/BaseUtils';
import './Table.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            perPage: props.perPage,
            page: 1,
            totalPages: 0,
            csv: "",
            displayedData: [],
            sorting: {}
        };
        this.handleBackPage = this.handleBackPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
    }

    componentDidMount() {
        this.setState((prevState, props) => {
            let perPage = parseInt(localStorage['perPage'] || props.perPage, 10);
            let sorting = Utils.getHashParams() || {};
            let data = props.data;
            if(sorting.by) {
                data = data.sort((a,b) => Utils.sort(a, b, sorting.by, sorting.direction));
            }
            return {
                perPage: perPage,
                data: data,
                sorting: sorting
            }
        });
        this.computeDisplayedData();
    }

    computeDisplayedData = () => {
        this.setState((prevState) => {
            let paginate = prevState.data.paginate(prevState.page, prevState.perPage);
            return {
                displayedData: paginate.data,
                totalPages: paginate.totalPages,
                page: paginate.currentPage
            }
        });
    };

    handleBackPage(event) {
        event.preventDefault();
        this.setState((prev) => {
            if (prev.page > 1)
                return {page: prev.page - 1}
        });
        this.computeDisplayedData();
    }

    handleNextPage(event) {
        event.preventDefault();
        this.setState((prevState) => {
            if (prevState.page < prevState.totalPages)
                return {page: prevState.page + 1}
        });
        this.computeDisplayedData();
    }

    handleSearch(event) {
        event.preventDefault();
        const searchWord = event.target.value;
        this.setState((prevState, props) => {
            let data = props.data.filter((value) => {
                return value.occupation.includes(searchWord)
                    || value.company.includes(searchWord)
                    || value.name.includes(searchWord);
            });
            return {data: data};
        });
        this.computeDisplayedData();
    }

    handleExport = event => {
        event.preventDefault();
        csv.writeToString(this.state.data, (err, data) => {
            this.setState(() => {
                return {csv: data};
            });
        });

    };

    handleSort = event => {
        event.preventDefault();
        const sortBy = event.target.id;
        this.setState((prevState) => {
            let sortDirection = 1;
            if(prevState.sorting.by === sortBy) {
                if(prevState.sorting.direction === sortDirection) {
                    sortDirection = -prevState.sorting.direction;
                }
            }
            let data = prevState.data.sort((a,b) => Utils.sort(a, b, sortBy, sortDirection));
            location.hash = `by=${sortBy}&direction=${sortDirection}`;
            return {data: data, sorting: {by: sortBy, direction: sortDirection}};
        });
        this.computeDisplayedData();
    };

    handleItemPerPageChange = event => {
        event.preventDefault();
        let perPage = parseInt(event.target.value, 10);
        localStorage.setItem("perPage", perPage);
        this.setState(() => {
            return {perPage: perPage}
        });
        this.computeDisplayedData();
    };

    render() {
        return (
            <div className="row">
                <ControlBox onSearch={ this.handleSearch } onExport={ this.handleExport }/>
                <table className="table table-striped">
                    <SortableHeader headers={this.props.header} onSort={this.handleSort}/>
                    <tbody>
                    {this.state.displayedData.map((item) =>
                        <Row key={item.id} item={item}/>
                    )}
                    </tbody>
                </table>
                <Paginator onBack={this.handleBackPage} onNext={this.handleNextPage} currentPage={this.state.page}
                           totalPages={this.state.totalPages}/>
                <ItemPerPage onItemPerPageChange={this.handleItemPerPageChange} perPage={this.state.perPage}/>
                <OutputArea text={this.state.csv}/>
            </div>
        );
    }
}

export default Table;