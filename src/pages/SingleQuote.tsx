import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { QuoteType } from "../App"

type props = {
    quotes: QuoteType[]
}

export default function SingleQuote({ quotes }: props) {

    const params = useParams()

    const [quote, setQuote] = useState<QuoteType | null>(null)
    useEffect(() => {
        fetch(`http://localhost:1234/quotes/${params.id}`)
            .then(resp => resp.json())
            .then(quoteFromServer => setQuote(quoteFromServer))
    }, [])

    return (
        <section>
            <img
                src={quote?.image}
                alt={quote?.firstName}
            />
            <div>
                <h2>{quote?.philosopy}</h2>
                <p>{quote?.philosopher} </p>
                <p>{quote?.age}</p>
            </div>

        </section>
    )
}