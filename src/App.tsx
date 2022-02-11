import { useEffect, useState } from 'react'

import './App.css'
import Quotes from './pages/quote'


export type QuoteType = {
  id: number
  philosopher: string
  philosopy: string
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
      .then(serverQuotes => setRandomQuote(serverQuotes))
  }, [])

  return (
    <div className="App">
      <h1>Quotes</h1>
      {
        quotes.map(quote =>
          <Quotes key={quote.id} quote={quote} />

        )}

    </div>
  )
}

export default App
