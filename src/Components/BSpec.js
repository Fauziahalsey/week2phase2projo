import React from 'react';

const BSpecs = ({ bot, goBackToList, enlistBot }) => {
  return (
    <div>
      <h2>Bot Specs</h2>
      <p>Name: {bot.name}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <img src={bot.avatar_url} alt={bot.name} />

      <button onClick={goBackToList}>Go Back</button>
      <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
    </div>
  );
};

export default BSpecs;
