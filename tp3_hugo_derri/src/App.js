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
      image : jeanne,
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
        
        
        
        <center>
        <Profil image={this.state.image} nom={this.state.nom} prenom={this.state.prenom} date={this.state.date}/>
        </center>
      </div>
    );
  }
}

export default App;
