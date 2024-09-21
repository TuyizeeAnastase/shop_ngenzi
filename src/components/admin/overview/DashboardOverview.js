import React from 'react';
import Sidebar from './Sidebar';
import OverviewCard from './OverviewCard';
import './Dashboard.css'; // Import the CSS file for Dashboard styling

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard Overview</h1>
        <div className="overview-cards">
          <OverviewCard
            title="Products"
            count="120"
            image={`${process.env.PUBLIC_URL}/assets/logo.png`} // Placeholder for your image path
          />
          <OverviewCard
            title="Orders"
            count="45"
            image={`${process.env.PUBLIC_URL}/assets/logo.png`} // Placeholder for your image path
          />
          <OverviewCard
            title="Customers"
            count="78"
            image={`${process.env.PUBLIC_URL}/assets/logo.png`} // Placeholder for your image path
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
