
import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { PIChart } from '../components/PIChart';

import './TeamPage.scss';


export const TeamPage = () => {

  const { teamName } = useParams();
  const [team, setTeam] = useState({ matches: [] });

  useEffect(
    () => {
      const fetchTeam = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams/${teamName}`);
        const data = await response.json();
        setTeam(data);
      };
      fetchTeam();
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
        <PIChart team={team} />
        <p className='win-lose-title'>win / loss</p>
      </div>
      <div className='match-detail-section'>
        <p className='match-detial-title'>  Latest Matches </p>
        <MatchDetailCard match={team.matches[0]} teamName={team.teamName} />
      </div>

      {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} match={match} teamName={team.teamName} />)}
      <div className='more-link'>
        <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`} > More > </Link>
      </div>

    </div>
  );

}

export default TeamPage;
