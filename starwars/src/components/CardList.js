import React from 'react';

import Card from './Card';

const CardList = props =>{
    //console.log(props.cards);
    return (
        <div className='cardList'>
            {props.cards.map(item => (
                <Card 
                    card={item}
                    key={item.created}
                />
            ))}
        </div>
    );
}

export default CardList;