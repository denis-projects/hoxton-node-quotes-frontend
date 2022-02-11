import { useEffect, useState } from 'react'

import './App.css'
import Quotes from './pages/quote'


export type QuotesType = {
  id: number
  philosopher: string
  philosopy: string
}

function App() {

  //state for all the quotes
  const [quotes, setQuotes] = useState<QuotesType[]>([])
  //state for one quote
  // const [quote, setQuote] = useState<QuotesType[]>([])
  console.log(quotes)



  // Fetching the server (All quotes)
  useEffect(() => {
    fetch('http://localhost:1234/quotes')
      .then(resp => resp.json())
      .then(serverQuotes => setQuotes(serverQuotes))
  }, [])


  // Fetching only one quote based on id

  // useEffect(() => {
  //   fetch(`http://localhost:1234/quotes/:id`)
  //     .then(resp => resp.json())
  //     .then(serverQuotes => setQuotes(serverQuotes))
  // }, [])

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
