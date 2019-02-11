import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profil from './Component/Profil.js';
import Bouton from './Component/Bouton.js';
import jeanne from './Component/ppjeanne.jpg';
import martine from './Component/martine.jpg';
import claude from './Component/claude.jpg';

var profilactuel="1";


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      
        image : jeanne,
        prenom : "Jeanne",
        nom : "Durand",
        date :"06/10/1993",
    }
    this.changeprofil1 = this.changeprofil1.bind(this);
    this.changeprofil2 = this.changeprofil2.bind(this);
    this.changeprofil3 = this.changeprofil3.bind(this);
   }
   changeprofil1(e)
   {
    this.setState({image:jeanne, prenom : "Jeanne", nom : "Durand", date : "23/08/1993" });
   }
   changeprofil2(e)
   {
     this.setState({ image:martine, prenom : "Martine", nom : "Dupont", date : "12/05/1967" });
   }
   changeprofil3(e)
   {
     this.setState({ image:claude, prenom : "Claude", nom : "Makelele", date : "08/10/1985" });
   }
    
  render() {
    return (
      <div className="Navigateur">
        <header className="App-header">
          <p>
            Mon navigateur
          </p>
        </header>
        <div className="btn">
        <Bouton prenom="Jeanne" clicked={(e) => this.changeprofil1()}/>
        <Bouton prenom="Martine" clicked={(e) => this.changeprofil2()}/>
        <Bouton prenom= "Claude" clicked={(e) => this.changeprofil3()} />
        </div>
        <hr/>
        <center>
        <Profil image={this.state.image} nom={this.state.nom} prenom={this.state.prenom} date={this.state.date}/>
        </center>
      </div>
    );
  }
}

export default App;
