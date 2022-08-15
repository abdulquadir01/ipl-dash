
import { React, useEffect, useState } from 'react';
import { TeamTile } from '../components/TeamTile';

import './HomePage.scss';


export const HomePage = () => {

  const [teams, setTeams] = useState([]);

  useEffect(
    () => {
        const featchAllTeams = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams`);
        const data = await response.json();
        setTeams(data);
      };

      featchAllTeams();

    }, []
  );


  return (
    <div className="HomePage">
      <div className='header-section'>
        <p className='app-name'> IPL Dashboard </p>
      </div>
      <div className='team-grid'>
            {
                teams.map( team => 
                  <TeamTile key={team.id} teamName={team.teamName}/>
                )
            }
      </div>
    </div>
  );

}
