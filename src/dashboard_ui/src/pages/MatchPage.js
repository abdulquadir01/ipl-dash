import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';





export const MatchPage = () => {    
    
    const { teamName, year } = useParams();

    const  [matches, setMatches] = useState([]);

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8080/teams/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);
                console.log(data);
            };

            fetchMatches();

        }, [teamName, year]
    );


    return (
        <div className="MatchPage">
            <h2>Match Detail Page</h2>
            
            {
                matches.map(match => <MatchDetailCard match={match} teamName={teamName} />)
            }
           
        </div>
    );
}