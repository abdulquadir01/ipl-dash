import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';



export const PIChart = ({ team }) => {

    if(!team) {
        return null
    };

    let winCount = team.totalWins;
    let lossCount = team.totalMatches - team.totalWins;


    return (
        <div className='pie-chart'>
            <PieChart
                data={[
                    { title: 'Wins', value: winCount, color: '#4da375' },
                    { title: 'Losses', value: lossCount, color: '#a34d5d' }
                ]}
                />
            
        </div>
    );

}