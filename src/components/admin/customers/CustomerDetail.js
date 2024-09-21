import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <div className="overview">
        <div className="overview-card">
          <h3>Products</h3>
          <p>120</p>
        </div>
        <div className="overview-card">
          <h3>Orders</h3>
          <p>45</p>
        </div>
        <div className="overview-card">
          <h3>Customers</h3>
          <p>78</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
