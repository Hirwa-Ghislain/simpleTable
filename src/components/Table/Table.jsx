import React, { useState } from 'react';
import { tableData } from '../../Data/data';
import './Table.css'

function Table({ itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentPageData = tableData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='tableContainer'>
      <table id='customers'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Project Name</th>
            <th>Period</th>
            <th>Location</th>
            <th>Contact</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item, index) => (
            
            <tr key={index}>
            
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.projectName}</td>
              <td>{item.period}</td>
              <td>{item.location}</td>
              <td>{item.contact}</td>
              <td>{item.budget}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Table;
