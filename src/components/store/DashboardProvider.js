import React from 'react';

import { useStats } from '../utils';

// import Context
import { DashboardContext } from "./index";

const DashboardProvider = props => {
  const { stats, loading, error } = useStats('https://covid19.mathdro.id/api');

  
  const access = {
    stats,
    loading,
    error
  };

  return (
    <DashboardContext.Provider value={access}>
      {props.children}
    </DashboardContext.Provider>
  );
};
export default DashboardProvider;
