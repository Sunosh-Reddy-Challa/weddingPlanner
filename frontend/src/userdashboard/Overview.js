import React from 'react';
import Total from './Total';
import Clients from './Clients';
import BarChart from './BarChart';

const Overview = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Total />
        </div>
        <div className="col-md-6">
          <Clients />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <BarChart year={2023}/>
        </div>
      </div>
    </div>
  );
};

export default Overview;