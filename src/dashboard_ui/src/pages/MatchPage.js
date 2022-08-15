import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { YearSelector } from '../components/YearSelector';

import './MatchPage.scss';



export const MatchPage = () => {    
    
    const { teamName, year } = useParams();

    const  [matches, setMatches] = useState([]);

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);
            };

            fetchMatches();

        }, [teamName, year]
    );


    return (
        <div className="MatchPage">
            <div className='year-selector'>
                <p className='year-selector-title'>Select Year</p>
                <YearSelector teamName={teamName}/>
            </div>
            <div className='match-detail-section'>
                <p className='page-heading'><span>{teamName}</span>  matches in  <span>{year}</span></p>
                {
                    matches.map(match => <MatchDetailCard key={match.id} match={match} teamName={teamName} />)
                }
            </div>
           
        </div>
    );
}