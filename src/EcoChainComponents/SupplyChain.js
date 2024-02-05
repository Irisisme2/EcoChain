// EcoChainComponents/SupplyChain.js

import React, { useState, useEffect } from 'react';

const SupplyChain = () => {
  // Sample supply chain data (to be replaced with real data)
  const supplyChainData = [
    { step: 'Production', timestamp: '2024-02-10 10:00:00', details: 'Production initiation' },
    { step: 'Transportation', timestamp: '2024-02-12 15:30:00', details: 'Product shipment to warehouse' },
    { step: 'Warehousing', timestamp: '2024-02-15 08:45:00', details: 'Goods received at the warehouse' },
    { step: 'Quality Control', timestamp: '2024-02-18 11:20:00', details: 'Ensuring product quality standards' },
    { step: 'Distribution', timestamp: '2024-02-20 14:30:00', details: 'Dispatching products to retailers' },
    { step: 'Retail Display', timestamp: '2024-02-22 09:15:00', details: 'Setting up products on retail shelves' },
    // Add more delivery steps as needed
  ];

  // State to store supply chain data
  const [chainData, setChainData] = useState([]);

  // Effect to fetch data (simulating data retrieval from backend)
  useEffect(() => {
    // Simulate data fetching (to be replaced with an actual API request)
    setChainData(supplyChainData);
  }, []);

  return (
    <div>
      <h2>Supply Chain</h2>
      {chainData.length > 0 ? (
        <ul>
          {chainData.map((step, index) => (
            <li key={index}>
              <strong>Step:</strong> {step.step}
              <br />
              <strong>Time:</strong> {step.timestamp}
              <br />
              <strong>Details:</strong> {step.details}
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>No supply chain data available.</p>
      )}
    </div>
  );
};

export default SupplyChain;
