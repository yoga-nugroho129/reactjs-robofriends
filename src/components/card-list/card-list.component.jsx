import React from 'react';

import { Card } from '../card/card.component';

import './card-list.style.css';

export const CardList = props => (
  <div className='card-list'>
    {props.robots.map(robot => (
        <Card key={robot.id} robot={robot}/>)
    )}
  </div>
);

// props = anything that put on the tag of <CardList [..props..] /> on export destination
// props.children = anything that put on inside tag <CardList> [..props.children..] </CardList>  on export destination