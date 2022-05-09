import React from 'react';
import ReactDOM from 'react-dom/client';
import { teamj } from './Team.js';
import { JsonToTable } from 'react-json-to-table';

function App() {
  const dataj = teamj;
  console.log(dataj);
  return (
    <JsonToTable json={dataj} />
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <App />
  </React.StrictMode>
  
);