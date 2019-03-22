import React from 'react';

const Card = props =>{
    console.log(props);
    return <div className='card'>
        <h2>Name: {props.card.name}</h2>
        <p>Birth Year: {props.card.birth_year}</p>
        {/* <a href={props.card.homeworld} target="_blank">Home World</a> */}
        <p>Mass: {props.card.mass} kg</p>
    </div>
}

export default Card;