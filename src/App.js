import React, {Component} from 'react';
import Table from './components/Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

let header = {
    name: 'Name',
    company: 'Company',
    age: 'Age',
    gender: 'Gender',
    occupation: 'Occupation'
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Table header={header} data={ require('./data/gen.json') } perPage={20} />
                </div>
            </div>
        );
    }
}

export default App;
