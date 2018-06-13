import React, { Component } from 'react';
import { Players } from '../../imports/api/players';

class AddPlayer extends Component {

  handleSubmit(event) {
    let playerName = event.target.playerName.value;
    event.preventDefault();
    if (playerName) {
      event.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0,
      })
    }
  };

  render() {
    return (
      <div className='item'>
        <form className='form' onSubmit={this.handleSubmit}>
          <input className='form__input' type='text' name='playerName' placeholder='Player name' />
          <button className='button'>Add Player</button>
        </form>
      </div>
    )
  }
}

export default AddPlayer;