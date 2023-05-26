import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function PokeCard({ card }) {
    const [pokeCard, setPokeCard] = useState(null);
    let cardDetails;

    useEffect(() => {
        setPokeCard(card);
    }, [card]);

    if (card.supertype === "Pokémon") {
        cardDetails = <p>Type: {card.types}</p>
    }
    else {
        cardDetails = <p>Type: {card.supertype}</p>
    }


    return (
        <Card style={{ width: '18rem' }} className='mx-auto'>
            <Card.Img
                bg='dark'
                variant='top'
                src={card.images.small}
            />
            <Card.Body>
                <Card.Title>
                    <Link to={`/${card.number}`}>{card.number}. {card.name}</Link>
                </Card.Title>
                <Card.Text as='div'>
                    {cardDetails}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export { PokeCard };