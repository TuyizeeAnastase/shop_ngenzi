import React from 'react';
import Sidebar from './Sidebar';
import OverviewCard from './OverviewCard';
import './Dashboard.css';

const Dashboard = () => {
  const products = [
    { id: 1, name: 'Product 1', category: 'Category A', price: '$10.00' },
    { id: 2, name: 'Product 2', category: 'Category B', price: '$15.00' },
    { id: 3, name: 'Product 3', category: 'Category A', price: '$20.00' },
    { id: 4, name: 'Product 4', category: 'Category C', price: '$25.00' },
    { id: 5, name: 'Product 5', category: 'Category B', price: '$30.00' },
  ];

  const orders = [
    { id: 1, product: 'Product 1', quantity: 2, status: 'Shipped' },
    { id: 2, product: 'Product 2', quantity: 1, status: 'Processing' },
    { id: 3, product: 'Product 3', quantity: 5, status: 'Delivered' },
    { id: 4, product: 'Product 4', quantity: 3, status: 'Cancelled' },
    { id: 5, product: 'Product 5', quantity: 1, status: 'Shipped' },
  ];

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
          <OverviewCard
            title="Customers"
            count="78"
            image={`${process.env.PUBLIC_URL}/assets/logo.png`} // Placeholder for your image path
          />
        </div>

        <h2>Recent Products</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Recent Orders</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
