import React from 'react';
import TeamJsonDataDisplay from './Team.js';
import SeasonJsonDataDisplay from './Season.js';
import PlayerJsonDataDisplay from './Player.js';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <React.Fragment>
      <TeamJsonDataDisplay /> &nbsp;
      <SeasonJsonDataDisplay /> &nbsp;
      <PlayerJsonDataDisplay />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <App />
  </React.StrictMode>
);