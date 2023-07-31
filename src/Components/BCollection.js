import React from "react";

function Bcollection({ bots, onList }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div className="bot-army" key={bot.id}>
          <h3>Name: {bot.name}</h3>
          <h3>Health: {bot.health}</h3>
          <h3>Damage: {bot.damage}</h3>
          <h3>Armor: {bot.armor}</h3>
          <h3>Class: {bot.bot_class}</h3>
          <img src={bot.avatar_url} alt={bot.name} />
          <button onClick={() => onList(bot)}>List</button>
        </div>
      ))}
    </div>
  );
}

export default Bcollection;
