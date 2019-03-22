import React from 'react';

const Card = props =>{

    return <div className='card'>
        <h2>Name: {props.card.name}</h2>
        <p>Birth Year: {props.card.birth_year}</p>
        <p>Mass: {props.card.mass} kg</p>
        <p>Height: {props.card.height} cm</p>
        <p>Gender: {props.card.gender}</p>
        <p>Eye Color: {props.card.eye_color}</p>
        <p>Skin Color: {props.card.skin_color}</p>
    </div>
}

export default Card;