import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profil from './Component/Profil.js';
import Bouton from './Component/Bouton.js';
import jeanne from './Component/ppjeanne.jpg';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      prenom : "Jeanne",
      nom : "Durand",
      date :"06/10/1993"
    }
  }
  render() {
    return (
      <div className="Navigateur">
        <header className="App-header">
          <p>
            Mon navigateur
          </p>
        </header>
        <hr/>
        <div className="bouton">
        <Bouton clicked="Jeanne"></Bouton>
        
        
        </div>
        <center>
        <div className="profil">
        <Profil>
        <img className="img"src={jeanne} width="150 px" height="150px" />
        <p className="prenom">{this.state.prenom}</p>
        <p className="nom">{this.state.nom}</p>
        <p className="date"> Né(e) le : {this.state.date}</p>
        </Profil>
        </div>
        </center>
      </div>
    );
  }
}

export default App;
