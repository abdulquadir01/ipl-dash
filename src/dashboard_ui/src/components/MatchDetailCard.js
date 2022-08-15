import "./MatchDetailCard.scss";

import {React} from 'react';
import { Link } from 'react-router-dom';


export const MatchDetailCard = ({match, teamName}) => {
  
  if(!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.matchWinner;

  return (
    <div className={ isMatchWon ? "MatchDetailCard won-card" : "MatchDetailCard loss-card"}>
      <div className="primary-details">
          <span className="vs">vs</span> 
          <h1 className="other-team-name"> 
              <Link to={otherTeamRoute}>
                {otherTeam}
              </Link>
          </h1>
          <h4 className="match-date"> on {match.date}</h4>
          <h3 className="match-venue"> at {match.venue}</h3>
          <h4 className="match-result"> {match.matchWinner} won by {match.resultMargin} {match.result} </h4>
      </div>
      <div className="additional-details"> 
        <h4> First Innings </h4>
        <p>{match.team1}</p>
        <h4> Second Innings </h4>
        <p>{match.team2}</p>
        <h4> Player of the match </h4>
        <p>{match.playerOfMatch}</p>
        <h4> Umpires </h4>
        <p>{match.umpire1}, {match.umpire2} </p>
      </div>
    </div>
  );
}

