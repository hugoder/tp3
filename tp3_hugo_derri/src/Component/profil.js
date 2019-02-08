import React, { Component } from 'react';
import './profil.css';

class profil extends Component {
  constructor()
  {
    super();
    this.state = {
      prenom: "Jeanne",
      Nom: "Nom",
  };
}
    render() {
      return (
      <center>
      <div className="profil" >
          <img src="ppjeanne.jpg" className="img" />
          <p className="prenom"> prenom </p>
      </div>
      </center>
      );
    }
  }
  