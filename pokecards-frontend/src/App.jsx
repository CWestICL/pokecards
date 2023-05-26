import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { CardDetails } from './routes/CardDetails';
import './App.css'

function App() {
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?q=set.id:base1")
      .then((res) => res.json())
      .then((data) => {
        setCardList(data.data.sort((a, b) => a.number - b.number))
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home cardList={cardList} />} />
        <Route path="/:num" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
