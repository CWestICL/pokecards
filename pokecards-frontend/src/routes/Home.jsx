import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { PokeCard } from '../components/PokeCard';

function Home({ cardList }) {

    const [filteredCards, setFilteredCards] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setFilteredCards(
            cardList.filter((card) =>
                card.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, cardList]);

    if (cardList.length < 1) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Row className='mb-4'>
                <Col sm='8' md='6' className='mx-auto'>
                    <InputGroup>
                        <InputGroup.Text id='search'>Search</InputGroup.Text>
                        <FormControl
                            value={search}
                            aria-label='search'
                            aria-describedby='search'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </InputGroup>
                </Col>
            </Row>

            <Row className='g-4'>
                {filteredCards.map((card) => (
                    <Col key={card.id}>
                        <PokeCard card={card} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export { Home };