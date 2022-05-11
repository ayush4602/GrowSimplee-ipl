import React from 'react';
import TeamJsonDataDisplay from './Team.js';
import SeasonJsonDataDisplay from './Season.js';
import PlayerJsonDataDisplay from './Player.js';
import MatchJsonDataDisplay from './Match.js';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import './table.css';


function App() {
  return (
    <React.Fragment>
      <div className='text'>Team Data</div>
      <TeamJsonDataDisplay /> &nbsp;
      <div className='text'>Seaon Data</div>
      <SeasonJsonDataDisplay /> &nbsp;
      <div className='text'>Player Data</div>
      <PlayerJsonDataDisplay /> &nbsp;
      <div className='text'>Matches Data</div>
      <MatchJsonDataDisplay />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    <App />
  </React.StrictMode>
);

serviceWorker.register();