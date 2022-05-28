import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-5xl text-primary font-bold">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
          {/* dashboard sidebar */}
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          <li>
            <Link to="/dashboard">My Order</Link>
          </li>
          <li>
            <Link to="/dashboard/profile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Add A Review</Link>
          </li>
          <li>
            <Link to="/dashboard/make-admin">Make Admin</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
