import React from 'react';

const BCollection = ({ bots, addToArmy }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div className='bot-card' key={bot.id}>
          <p>Name: {bot.name}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>

          <img  className="img"src={bot.avatar_url} alt={bot.name} />
          <button onClick={() => addToArmy(bot)}>Add to Army</button>
        </div>
      ))}
    </div>
  );
};

export default BCollection;
