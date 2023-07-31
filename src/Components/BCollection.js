import React from "react";

function Bcollection ({bots, onList}) {
    return(
        <div>
            <h2>Bot Collection</h2>
            {bots.map((bot) => (
                <div className="bot-army" key={bot.id}>
                    <h3>Name:{bot.name}</h3>
                    <h3>Health{ bot.health }</h3>
                    <h3>Damage{ bot.damage}</h3>
                    <h3>Amor{ bot.amor}</h3>
                    <h3>Class{ bot.class}</h3>
                    <img src={bot.avatar_url}/>
                    <button onClick={() => onList(bot)}>List</button>
                </div>
            ))}
        </div>
    );
}

export default Bcollection;