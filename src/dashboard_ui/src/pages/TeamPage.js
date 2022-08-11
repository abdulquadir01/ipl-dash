import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';


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
      <h1>{team.teamName} </h1>
      <MatchDetailCard match={team.matches[0]} teamName={team.teamName} />
      {team.matches.slice(1).map(match => <MatchSmallCard match={match} teamName={team.teamName} />)}
    </div>
  );

}

export default TeamPage;