import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';

const BarChart = ({ year }) => {
  const [data, setData] = useState([]);
  const authToken = localStorage.getItem("token"); // Assuming the authentication token is stored in localStorage
  const fetchEarnings = async () => {
    try {
      const response = await fetch(`https://mern-project-backend-opal.vercel.app/api/auth/earning?year=${year}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'authtoken': authToken,
        },
      });
      const data = await response.json();
      console.log('Response from the backend:', data);

      const { earnings } = data;
      const monthlyData = Array.from({ length: 12 }, (_, index) => ({
        month: index + 1,
        totalEarnings: 0,
      }));

      earnings.forEach((earning) => {
        const month = new Date(earning.date).getMonth();
        monthlyData[month].totalEarnings += earning.amount;
      });

      setData(monthlyData);
    } catch (error) {
      console.error('Error fetching earnings:', error);
    }
  };

  useEffect(() => {
    fetchEarnings();
  }, [year, authToken]);

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveBar
        data={data}
        keys={['totalEarnings']}
        indexBy="month"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Month',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Total Earnings',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default BarChart;
