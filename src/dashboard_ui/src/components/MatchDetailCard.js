import {React} from 'react';
import { Link } from 'react-router-dom';


export const MatchDetailCard = ({match, teamName}) => {
  
  if(!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  
  const otherTeamRoute = `/teams/${otherTeam}`;

  return (
    <div className="MatchDetailCard">

        <h3> Latest Matches </h3>
        <h2> vs 
            <Link to={otherTeamRoute}>
              {otherTeam}
            </Link>
          </h2>
        <h4> on {match.date}</h4>
        <h3> at {match.venue}</h3>
        <h3> {match.matchWinner} won by {match.resultMargin} {match.result} </h3>

    </div>
  );
}

