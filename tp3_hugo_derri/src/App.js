import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import profil from './Component/profil.js';
import jeanne from './Component/ppjeanne.jpg';

class App extends Component {
  render() {
    return (
      <div className="Navigateur">
        <header className="App-header">
          <p>
            Mon navigateur
          </p>
        </header>
        <hr/>
        <profil>
        <img className="img"src={jeanne} />
        
        </profil>
      </div>
    );
  }
}

export default App;
