import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Quotes from './pages/quote'
import SingleQuote from './pages/SingleQuote'


export type QuoteType = {
  id: number
  philosopher: string
  philosopy: string
  age: number
  firstName: string
  lastName: string
  image: string
}

function App() {

  //state for all the quotes
  const [quotes, setQuotes] = useState<QuoteType[]>([])

  // Fetching the server (All quotes)
  useEffect(() => {
    fetch('http://localhost:1234/quotes')
      .then(resp => resp.json())
      .then(serverQuotes => setQuotes(serverQuotes))
  }, [])



  //state for one quote random
  const [randomQuote, setRandomQuote] = useState<QuoteType | null>(null)
  console.log(randomQuote)


  // Fetching only one random quote

  useEffect(() => {
    fetch(`http://localhost:1234/randomQuote/`)
      .then(resp => resp.json())
      .then(random => setRandomQuote(random))
  }, [])

  return (
    <div className="App">

      <Routes>
        <Route index element={<Navigate replace to="/quotes" />} />
        <Route path='/quotes' element={<Quotes quotes={quotes} />} />
        <Route path='/quotes/:id' element={<SingleQuote quotes={quotes} />} />
      </Routes>

    </div>
  )
}

export default App
