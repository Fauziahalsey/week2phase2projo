import React, { useState, useEffect } from 'react';

const BCollection = ({ bots, addToArmy }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <p>{bot.name}</p>
          <button onClick={() => addToArmy(bot)}>Add to Army</button>
        </div>
      ))}
    </div>
  );
};

export default BCollection;
