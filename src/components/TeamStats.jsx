
import React from 'react';

const TeamStats = ({ totalStrength, totalAgility }) => {
  return (
    <div className="team-stats">
      <h2>Team Stats</h2>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
    </div>
  );
};

export default TeamStats;
