import React, { Component } from 'react';
import './Bouton.css';


class Bouton extends Component {

    render() {
      return (
                  <button className="bouton" onClick={this.props.clicked} className="bouton">{this.props.prenom}</button>
              );
          }
      }
      export default Bouton;
