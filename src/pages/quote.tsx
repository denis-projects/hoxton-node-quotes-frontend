import { QuoteType } from "../App"

type Params = {
    quote: QuoteType
}

function Quotes({ quote }: Params) {
    return (
        <div>
            <h3>{quote.philosopher}</h3>
            <p>{quote.philosopy}</p>
        </div>
    )
}

export default Quotes