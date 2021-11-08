import React from 'react';


function GameFieldGenerator(){
    var gameFieldConstructor: [] = [];
    return (
        <div>{gameFieldConstructor}</div>
    );
}


function PlayersSectionGenerator(){
    var mainConstructor: [] = [];
    return(<div>{mainConstructor}</div>);
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