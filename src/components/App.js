import React from 'react';

import { Home } from './pages';
import { Navbar } from './widgets';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar brand="Covid-19" />

      <div style={{ paddingTop: 75, }}>
        <Home />
      </div>
    </div>
  );
}
export default App;
