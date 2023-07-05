import React, { useState } from "react";
import "./EmployeeTable.css";

const EmployeeTable = ({ employees }) => {
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleFilter = (e, key) => {
    const value = e.target.value.toLowerCase();
    const filtered = employees.filter((employee) => {
      if (key === "experience") {
        return value === "" || employee[key] == value;
      } else {
        return employee[key].toLowerCase().includes(value);
      }
    });
    setFilteredEmployees(filtered);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const sortedEmployees = sortKey
    ? filteredEmployees.slice().sort((a, b) => {
        if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
        if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
        return 0;
      })
    : filteredEmployees;

  const pageCount = Math.ceil(sortedEmployees.length / itemsPerPage);
  const currentPageEmployees = sortedEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>ID</th>
            <th onClick={() => handleSort("firstName")}>
              First Name{" "}
              <input
                type="text"
                onChange={(e) => handleFilter(e, "firstName")}
              />
            </th>
            <th onClick={() => handleSort("lastName")}>
              Last Name{" "}
              <input
                type="text"
                onChange={(e) => handleFilter(e, "lastName")}
              />
            </th>
            <th onClick={() => handleSort("dateOfBirth")}>
              Date of Birth{" "}
              <input
                type="text"
                onChange={(e) => handleFilter(e, "dateOfBirth")}
              />
            </th>
            <th onClick={() => handleSort("function")}>
              Function{" "}
              <input
                type="text"
                onChange={(e) => handleFilter(e, "function")}
              />
            </th>
            <th onClick={() => handleSort("experience")}>
              Experience{" "}
              <input
                type="text"
                onChange={(e) => handleFilter(e, "experience")}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPageEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.function}</td>
              <td>{employee.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          disabled={currentPage === pageCount}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
