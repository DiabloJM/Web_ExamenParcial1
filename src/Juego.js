import React, { Component } from 'react';
import "./Juego.css"
import piedra from "./piedra.png";
import papel from "./papel.png";
import tijera from "./tijera.png";

class Juego extends Component {
    constructor() {
        super()
        this.state = {
            playerCounter: 0,
            enemyCounter: 0,
            message: "A jugar!",
            enemyImage: 0
        }
    }

    JugarPiedra =()=> {
        const enemyChoice= generateRandomNumber(3);
        const numberP = newPlayerCounter(enemyChoice, 1, this.state.playerCounter);
        const numberE = newEnemyCounter(enemyChoice, 1, this.state.enemyCounter);
        const text = newMessage(enemyChoice, 1,numberP,numberE);

        this.setState({
            playerCounter: numberP,
            enemyCounter: numberE,
            message: text,
            enemyImage: enemyChoice
        })
    }

    JugarPapel = ()=> {
        const enemyChoice= generateRandomNumber(3);
        const numberP = newPlayerCounter(enemyChoice, 2, this.state.playerCounter);
        const numberE = newEnemyCounter(enemyChoice, 2, this.state.enemyCounter);
        const text = newMessage(enemyChoice, 2,numberP,numberE);

        this.setState({
            playerCounter: numberP,
            enemyCounter: numberE,
            message: text,
            enemyImage: enemyChoice
        })
    }

    JugarTijera = ()=> {
        const enemyChoice= generateRandomNumber(3);
        const numberP = newPlayerCounter(enemyChoice, 3, this.state.playerCounter);
        const numberE = newEnemyCounter(enemyChoice, 3, this.state.enemyCounter);
        const text = newMessage(enemyChoice, 3,numberP,numberE);

        this.setState({
            playerCounter: numberP,
            enemyCounter: numberE,
            message: text,
            enemyImage: enemyChoice
        })
    }

    render() {
        return (
            <div className="Juego">
                <h1>Piedra, Papel o Tijera</h1>
                <h2>Elige Uno</h2>

                <div>
                    <h2 className="Contador">{this.state.playerCounter}</h2>
                    <button onClick={this.JugarPiedra}><img src={piedra}/></button>
                    <button onClick={this.JugarPapel}><img src={papel}/></button>
                    <button onClick={this.JugarTijera}><img src={tijera}/></button>
                </div>

                <h2 className="Mensaje">{this.state.message}</h2>

                <div>
                    <h2 className="Contador">{this.state.enemyCounter}</h2>
                    <img src= {newEnemyImage(this.state.enemyImage)} />
                </div>
            </div>
        );
    }
}

export default Juego;

function generateRandomNumber(max, min=1){
    return Math.floor(Math.random()*(max-min)+min); 
}

function newMessage(value, choice, playerCounter, enemyCounter){
   
   if( choice === 1 && value===1)
       return "Empate Ronda";
   else if( choice === 1 && value===2)
   {
       if(enemyCounter===2)
        return "PC GANA!";
       else
        return "Perdiste Ronda";
   }
   else if( choice === 1 && value=== 3)
   {
       if(playerCounter===2)
        return "JUGADOR GANA!";
       else
        return "Ganaste Ronda";
   }
   else if(choice ===2 && value===1)
    {
        if(playerCounter===2)
            return "JUGADOR GANA!";
        else
            return "Ganaste Ronda";
    }   
    else if( choice === 2 && value===2)
        return "Empate Ronda";
    else if( choice === 2 && value===3)
    {
        if(enemyCounter === 2)
            return "PC GANA!";
        else
            return "Perdiste Ronda";
    }
    else if(choice === 3 && value===1)
    {
        if(enemyCounter===2)
            return "PC GANA!";
        else
            return "Perdiste Ronda";
    }
    else if(choice ===3 && value===2)
    {
        if(playerCounter===2)
            return "JUGADOR GANA!";
        else
            return "Ganaste Ronda";
    }
    else if(choice=== 3 && value===3)
        return "Empate Ronda";
    else
        return "ERROR!";
    
}

function newPlayerCounter(value, choice, playerCounter){
    let counter = playerCounter;

    if( choice === 1 && value===1)
        return counter;
    else if( choice === 1 && value===2)
        return counter;
    else if( choice === 1 && value=== 3)
        return counter+1;
    else if(choice ===2 && value===1)
        return counter+1;
    else if(choice ===2 && value===2)
        return counter;
    else if(choice ===2 && value===3)
        return counter;
    else if(choice===3 && value===1)
        return counter;
    else if(choice===3 && value===2)
        return counter+1;
    else if(choice===3 && value===3)
        return counter;
    else
        return "ERROR!";
}

function newEnemyCounter(value, choice, enemyCounter){
    const counter = enemyCounter;

    if( choice===1 && value===1)
        return counter;
    else if( choice===1 && value===2)
        return counter+1;
    else if(choice===1 && value===3)
        return counter;
    else if( choice===2 && value===1)
        return counter;
    else if( choice===2 && value===2)
        return counter;
    else if( choice ===2 && value===3)
        return counter+1;
    else if( choice===3 && value===1)
        return counter+1;
    else if( choice===3 && value===2)
        return counter;
    else if( choice===3 && value===3)
        return counter;
    else
        return "ERROR!";
}

function newEnemyImage(value){
    if(value===1)
        return piedra;
    else if(value===2)
        return papel;
    else if(value===3)
        return tijera;
    else
        console.log("ERROR!");
}
