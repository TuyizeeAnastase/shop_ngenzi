import React from 'react';
import './OverviewCard.css'; // Import the CSS file for OverviewCard styling

const OverviewCard = ({ title, count, image }) => {
  return (
    <div className="overview-card">
      <img src={image} alt={title} className="card-image" />
      <h3 className='card-title'>{title}</h3>
      <p className='card-paragraph'>{count}</p>
    </div>
  );
};

export default OverviewCard;
