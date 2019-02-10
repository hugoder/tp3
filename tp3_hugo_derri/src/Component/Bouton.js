import React, { Component } from 'react';
import './Bouton.css';

class Bouton extends Component {
      render() {
        return (
                    <bouton onClick={props.clicked} className="bouton">{props.prenom}</bouton>
                );
            }
        }

    export default Bouton;