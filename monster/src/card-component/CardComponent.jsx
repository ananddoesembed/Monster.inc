import React from 'react';
import IndividualCard from './IndividualCard/IndividualCard'
import './CardComponent.css';
export default function CardComponent(props) {
    return (
        <div className="card-list">
        {props.monsters.map(monster=>( <IndividualCard key={monster.id} monsters={monster}/>))}
             
                  </div>
    )
}
