import React, { useEffect, useState } from 'react';
import Chart from './components/Chart';
import Table from './components/Table';
import Form from './components/Form';
import './styles/components.css';

interface ChartItem {
  month: string;
  value: number;
}

interface TableItem {
  id: number;
  name: string;
  value: number;
}

const App: React.FC = () => {
  // Local state for chart and table data
  const [chartData, setChartData] = useState<ChartItem[]>([]);
  const [tableData, setTableData] = useState<TableItem[]>([]);

  // Fetch data from data.json once on component mount
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        // data.chartData & data.tableData come from data.json
        setChartData(data.chartData);
        setTableData(data.tableData);
      })
      .catch((err) => console.error('Failed to fetch data:', err));
  }, []);

  // Define table columns
  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Value', accessor: 'value' },
  ];

  return (
    <div className="container">
      <header className="page-header">
        <h1>Data Visualization and Component Development</h1>
        <p className="subtitle">A simple React TypeScript demo with accessible components</p>
      </header>

      <main>
        <section className="section">
          <h2>Enter Your Details</h2>
          <Form />
        </section>

        <section className="section">
          <h2>Chart Visualization</h2>
          {/* Pass fetched chartData to the Chart component */}
          <Chart data={chartData} />
        </section>

        <section className="section">
          <h2>Data Table</h2>
          {/* Pass fetched tableData and columns to the Table component */}
          <Table data={tableData} columns={columns} />
        </section>
      </main>
    </div>
  );
};

export default App;
