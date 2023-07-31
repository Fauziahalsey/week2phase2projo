import React from 'react';

const BArmy = ({ army, releaseFromArmy, dischargeFromService }) => {
  return (
    <div className='bot-army'>
      <h2> Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <p>{bot.name}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <img  className="img"src={bot.avatar_url} alt={bot.name} />

          <button onClick={() => releaseFromArmy(bot)}>Release</button>
          <button onClick={() => dischargeFromService(bot.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default BArmy;
	
