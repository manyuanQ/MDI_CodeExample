import React from 'react';
import Chart from './components/Chart';
import Table from './components/Table';
import Form from './components/Form';
import './styles/components.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <h1>Data Visualization and Component Development</h1>
            <Form />
            <Chart />
            <Table />
        </div>
    );
};

export default App;