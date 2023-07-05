import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EmployeeTable from './EmployeeTable';
import employees from '././database/sluzba.json';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmployeeTable employees={employees} />
  </React.StrictMode>
);
