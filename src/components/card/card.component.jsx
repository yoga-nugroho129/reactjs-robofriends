import React from 'react';
import './card.style.css';

export const Card = props => (
  <div className='card-container'>
    <img alt='robot-pic' src={`https://robohash.org/${ props.robot.id }?set=set1&size=150x150`} />
    <h3> { props.robot.name } </h3>
    <p> { props.robot.email } </p>
  </div>
);