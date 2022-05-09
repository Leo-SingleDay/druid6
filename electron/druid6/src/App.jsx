import './App.css';

import { HashRouter, Route } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import SideBar from './SideBar';
import Intro from './Intro';
import ServerMonitoring from './ServerMonitoring';

function App() {
  return (
    <HashRouter>
      <div>
        <div className='grid-container'>
          <SideBar />
          <Route path="/" exact component={Intro} />
          <Route path="/server-monitoring" component={ServerMonitoring} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
