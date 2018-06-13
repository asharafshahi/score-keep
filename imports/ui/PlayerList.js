import React, { Component } from 'react';
import Player from './Player';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class PlayerList extends Component { 
  
  renderPlayers () { 
    if (this.props.players.length === 0) {
      return (
        <div className='item'>
        <p className='item__message'>Please add your first player</p>
        </div>
      );
    } else {
      return this.props.players.map(player => {
        return <Player key={player._id} player={player}/>;
      });
    }
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}