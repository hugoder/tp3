import React, { Component } from 'react';
import './Bouton.css';

class Bouton extends Component {

      render() {
        return (
                    <Bouton onClick={this.props.clicked} className="bouton">{this.props.prenom}</Bouton>
                );
            }
        }

    export default Bouton;