import { React } from 'react';
import { Link } from 'react-router-dom';


export const MatchSmallCard = ({ match, teamName }) => {

  if (!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;

  return (
    <div className="MatchSmallCard">
  
      <h4>vs
        <Link to={ otherTeamRoute }>
          {otherTeam}
        </Link>
      </h4>
      <p> {match.matchWinner} won by {match.resultMargin} {match.result} </p>

    
    </div>
  );
}
