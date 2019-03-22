import React from 'react';

const Card = props =>{
    console.log(props.card.speciesPlaintext);
    return <div className='card'>
        <h2>Name: {props.card.name}</h2>
        <p>Birth Year: {props.card.birth_year}</p>
        <p>Species: {props.card.speciesPlaintext}</p>
        <p>Mass: {props.card.mass} kg</p>
        <p>Height: {props.card.height} cm</p>
        <p>Gender: {props.card.gender}</p>
    </div>
}

export default Card;