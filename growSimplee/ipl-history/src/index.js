import React from 'react';
import ReactDOM from 'react-dom/client';
import { teamj } from './Team.js';
import { seasonj } from './Season.js';
import { JsonToTable } from 'react-json-to-table';

function App() {
  return (
    <React.Fragment>
      <JsonToTable json={teamj} />
      <JsonToTable json={seasonj} />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <App />
  </React.StrictMode>
  
);