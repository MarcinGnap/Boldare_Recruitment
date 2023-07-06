import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import EmployeeTable from "./EmployeeTable";
import employees from "./database/sluzba.json";
import Navbar from "././components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <EmployeeTable employees={employees} />{" "}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
