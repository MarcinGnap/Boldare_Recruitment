import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import EmployeeTable from "./EmployeeTable";
import employees from "./database/sluzba.json";
import Navbar from "././components/Navbar"; // Importujesz komponent nawigacji

const App = () => {
  return (
    <div>
      <Navbar /> {/* Dodajesz nawigację na górze strony */}
      <EmployeeTable employees={employees} />{" "}
      {/* Dodajesz komponent EmployeeTable */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
