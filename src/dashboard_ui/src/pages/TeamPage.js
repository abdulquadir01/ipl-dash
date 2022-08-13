import './TeamPage.scss';

import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PIChart } from '../components/PIChart';


export const TeamPage = () => {

  const { teamName } = useParams();
  const [team, setTeam] = useState({ matches: [] });

  useEffect(
    () => {
      const fetchMatches = async () => {
        const response = await fetch(`http://localhost:8080/teams/${teamName}`);
        const data = await response.json();
        setTeam(data);
        console.log(data);
      };
      fetchMatches();
    }, [teamName]
  );

  if (!team || !team.teamName) {
    return <h1>Team not found!!!</h1>
  }
  return (
    <div className="TeamPage">
        <div className='team-name-section'>
            <h1 className='team-name'>{team.teamName} </h1>
        </div>
        <div className='win-loss-section'>
            <p>win / loss</p>
            <PIChart  team={team}/>
        </div>
        <div className='match-detail-section'>
            <h3> Latest Matches </h3>
            <MatchDetailCard match={team.matches[0]} teamName={team.teamName} />
        </div>
        <div>
            { team.matches.slice(1).map(match => <MatchSmallCard match={match} teamName={team.teamName} />) }
            <div className='more-link'>
                <a href="#">More -> </a>
            </div>
        </div>
    </div>
  );

}

export default TeamPage;
