import React from 'react';
import { Link } from 'react-router-dom';


import './TeamTile.scss'



export const TeamTile = ( {teamName} ) => {
  return (
    <div className='TeamTile'>
        <p>
          <Link to={`/teams/${teamName}`}>
              {teamName}
          </Link>
        </p>    
    </div>
  )
}
