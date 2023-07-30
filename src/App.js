import React, { useState, useEffect } from 'react';
import BArmy from './Components/BArmy';
import BCollection from './Components/BCollection';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = () => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  };

  const addToArmy = (botToAdd) => {
    // Check if the bot is already enlisted in the army
    if (!army.some((bot) => bot.id === botToAdd.id)) {
      setArmy([...army, botToAdd]);
    }
  };

  const releaseFromArmy = (botToRelease) => {
    const updatedArmy = army.filter((bot) => bot.id !== botToRelease.id);
    setArmy(updatedArmy);
  };

  const dischargeFromService = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, { method: 'DELETE' })
      .then((response) => response.json())
      .then((data) => {
        const updatedArmy = army.filter((bot) => bot.id !== botId);
        setArmy(updatedArmy);
      })
      .catch((error) => console.error('Error discharging bot:', error));
  };

  return (
    <div>
      <BCollection bots={bots} addToArmy={addToArmy} />
      <BArmy army={army} releaseFromArmy={releaseFromArmy} dischargeFromService={dischargeFromService} />
    </div>
  );
};

export default App;
