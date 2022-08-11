import {React} from 'react';


export const MatchSmallCard = ({match}) => {
  return (
    <div className="MatchSmallCard">
     
        <h5>{match.team1} vs {match.team2}</h5>
     
    </div>
  );
}

