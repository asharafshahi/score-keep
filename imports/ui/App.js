import React, { Component } from 'react';
import TitleBar from './TitleBar'; 
import AddPlayer from './AddPlayer'; 
import PlayerList from './PlayerList';
import PropTypes from 'prop-types';

export default App = (props) => {

  return (
    <div>
      <TitleBar title={props.title} subtitle='Created by Arman Sharafshahi'/>
      <div className='wrapper'>
        <PlayerList players={props.players} />
        <AddPlayer />
      </div>
    </div>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}