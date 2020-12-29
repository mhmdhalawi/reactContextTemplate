import React, { useContext } from 'react';
import { DataContext } from '../context/context';

const Dashboard = () => {
  const { name } = useContext(DataContext);
  return (
    <div>
      <hr />
      <h1 className="textPrime">Dashboard Side</h1>
      <h2 className="heading">{name}</h2>
    </div>
  );
};

export default Dashboard;
