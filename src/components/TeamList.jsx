
import React from 'react';

const TeamList = ({ team, handleRemoveFighter }) => {
  return (
    <div className="team-list">
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter) => (
            <li key={fighter.name}>
              <img src={fighter.img} alt={fighter.name} />
              <p>Name: {fighter.name}</p>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamList;
