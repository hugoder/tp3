import React, { Component } from 'react';
import './Profil.css';

class Profil extends Component {

    render() {
      return (
      <center>
      <div className="profil" >
        <img src={this.props.image} className="img" height="150px" width="150px"/>
        <p className="prenom">{this.props.prenom}</p>
        <p className="nom">{this.props.nom}</p>
        <p className="date"> Né(e) le : {this.props.date}</p>
      </div>
      </center>
      );
    }
  }
  
  export default Profil;