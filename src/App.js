	

import React, { useEffect, useState } from "react";
import "./App.css"

const Url = "http://localhost:3000/bots";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const handleList = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRemove = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const handleDelete = async (bot) => {
    try {
      const response = await fetch(`${Url}/${bot.id}`, {
        method: "DELETE",
      });

  if (response.ok) {
    setArmy((prevArmy) => prevArmy.filter((b) => b.id !== bot.id));
  }
} catch (error) {
  console.error("Error deleting bot:", error);
}
  };

  return (
    <div>

  
  <div id="sect1"> 
  <div id="main">
    <h1>Bot Army</h1>
    <h2>Bot Collection</h2>
  </div>
  <div>
    {bots.map((bot) => (
      <div key={bot.id} id="bot">
        <h3>{bot.name}</h3>
        <p>{bot.name}</p>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
        <img src={bot.avatar_url}/>
        <button onClick={() => handleList(bot)}>Add Bot</button>
      </div>
    ))}

  </div>
  </div>
  <div id="mybots">
    <h2>Your Bot Army</h2>
    {army.map((bot) => (
      <div key={bot.id} id="bot">
        <h3>{bot.name}</h3>

        <img src={bot.avatar_url} alt={bot.name} />
        <button onClick={() => handleRemove(bot)}>Remove</button>
        <button onClick={() => handleDelete(bot)}>X</button>
      </div>
    ))}
  </div>
</div>
  );
}

export default App;

