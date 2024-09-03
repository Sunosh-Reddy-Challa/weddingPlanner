import React, { useState, useEffect } from 'react';

const Total = () => {
  const [totalEarning, setTotalEarning] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('token');
        const response = await fetch('https://mern-project-backend-opal.vercel.app/api/auth/total-earning', {
          headers: {
            'Content-Type': 'application/json',
            'authtoken': authToken,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTotalEarning(data.totalEarning);
      } catch (error) {
        console.error('Error fetching total earning:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="total-earning border rounded p-3 mb-3">
      <h3>Total Earning</h3>
      <p>{`$${totalEarning}`}</p>
    </div>
  );
};

export default Total;
