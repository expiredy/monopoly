import React from 'react';

function GameFieldGenerator(){
    return (
        <div></div>
    );
}


function PlayersSectionGenerator(){
    return (<div></div>);
}

function GameTableBuilder(){
    return(
        <div className="game-table">

            <div className="chat-container">
            
            </div>
            {GameFieldGenerator()}
            {PlayersSectionGenerator()}
        </div>
    );
}


export default GameTableBuilder;