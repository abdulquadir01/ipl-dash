import './App.scss';

import {Route, Routes} from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import {TeamPage} from './pages/TeamPage';
import {MatchPage} from './pages/MatchPage';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Switch> */}
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} /> 
          <Route path="/teams/:teamName" element={<TeamPage />} /> 
        {/* </Switch> */}
      </Routes>
    </div>
  );
}

export default App;
