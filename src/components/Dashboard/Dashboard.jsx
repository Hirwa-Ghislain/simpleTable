import React from "react";
import "./Dashboard.css";
import Table from "../Table/Table";

const Dashboard = () => {
  return (
    <div className="app">
      <div className="dashboard">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5458 1.17528C12.4937 0.148194 14.6117 2.22361 13.6271 4.19278L12.4796 6.48778C12.1608 7.12528 12.1608 7.87611 12.4796 8.51361L13.6271 10.8086C14.6117 12.7778 12.4937 14.8461 10.5458 13.8261L2.33625 9.50528C0.72125 8.65528 0.72125 6.34611 2.33625 5.49611L7.27333 2.89653"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div>Dashboard</div>
      </div>
      <div className="add">
        <div>20 results</div>
        <div>
          <input type="button" value={"+ Add Owner"}></input>
          <input type="button" value={"+ Add Vehicle"}></input>
        </div>
      </div>
      <div className="table">
        <Table itemsPerPage={5} />
      </div>
    </div>
  );
};

export default Dashboard;
