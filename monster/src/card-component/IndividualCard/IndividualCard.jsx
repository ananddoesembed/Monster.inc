import React from 'react'
import './IndividualCard.css'
export default function IndividualCard(props) {
    return (
        <div className='card-container'>
        <img alt='logo' src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}/>
            <h1>{props.monsters.name}</h1>
            <p>{props.monsters.email}</p>
        </div>
    )
}
