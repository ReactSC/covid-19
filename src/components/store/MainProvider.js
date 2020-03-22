import React from 'react';

// import Context
import { MainContext, DashboardProvider } from "./index";

const Provider = props => {
  return (
    <MainContext.Provider>
      <DashboardProvider>
        {props.children}
      </DashboardProvider>
    </MainContext.Provider>
  );
}
export default Provider;