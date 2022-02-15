import { useParams } from "react-router-dom"
import { QuoteType } from "../App"

type props = {
    quotes: QuoteType[]
}

export default function SingleQuote({ quotes }: props) {

    const params = useParams()

    const quote = quotes.find((filtredQuote) => filtredQuote.id === Number(params.id));

    if (quote !== undefined)
        return (
            <section>
                <img
                    src={quote.image}
                    alt={quote.firstName}
                />
                <div>
                    <h2>{quote.philosopy}</h2>
                    <p>{quote.philosopher} </p>
                    <p>{quote.age}</p>
                </div>

            </section>
        )
}