import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CardDetails() {
    const params = useParams();
    const [pokeCard, setPokeCard] = useState(null);

    useEffect(() => {
        fetch(`https://api.pokemontcg.io/v2/cards?q=id:base1-${params.num}`)
            .then((res) => res.json())
            .then((data) => {
                setPokeCard(data.data[0]);
            })
    }, [params.name]);

    if (!pokeCard) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={pokeCard.images.small} />
            <h1>{pokeCard.name}</h1>
            <p>Type: {pokeCard.types}</p>
            <p>HP: {pokeCard.hp}</p>
            <div>
                <p>Moves:</p>
                <ul>
                    {pokeCard.attacks.map((attack) => (
                        <li>
                            <span>{attack.name}</span>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
}

export { CardDetails };