import React from 'react';

const BArmy = ({ army, releaseFromArmy, dischargeFromService }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <p>{bot.name}</p>
          <button onClick={() => releaseFromArmy(bot)}>Release</button>
          <button onClick={() => dischargeFromService(bot.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default BArmy;
