import { useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { QuoteType } from "../App"


type props = {
    quotes: QuoteType[]
}


export default function Quotes({ quotes }: props) {

    const [newQuote, setNewQoute] = useState<QuoteType[]>([])

    const params = useParams()
    const quote = quotes.find((filtredQuote) => filtredQuote.id === Number(params.id));




    function addNewQuote(philosopy: string, philosopher: string, age: number, firstName: string, lastName: string, img: string) {
        fetch(`http://localhost:1234/quotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                philosopy: philosopy,
                philosopher: philosopher,
                age: age,
                firstName: firstName,
                lastName: lastName,
                img: img
            })
        }).then(resp => resp.json())
            .then(() => {
                const updatedPhilosopher = JSON.parse(JSON.stringify(newQuote))
                updatedPhilosopher.push({
                    philosopy: philosopy,
                    philosopher: philosopher,
                    age: age,
                    firstName: firstName,
                    lastName: lastName,
                    img: img
                })
                setNewQoute(updatedPhilosopher)
            })

    }


    return (

        <>

            <form onSubmit={(e) => {
                e.preventDefault()
                // @ts-ignore
                addNewQuote(e.target.firstName.value, e.target.lastName.value, e.target.philosopy.value)
                // @ts-ignore
                e.target.reset()
            }}>
                <input name="firstName" id="firstName" type="text" placeholder="Enter your First Name" />
                <input name="lastName" id="lastName" type="text" placeholder="Enter your Last Name" />
                <input name="philosopy" id="text" type="text" placeholder="Type your philosopy" />

                <button type="submit">Create Philosopy</button>
            </form>

            {
                quotes.map(quote =>
                    <Link to={`/qoutes/${quote.id}`}>
                        <div key={quote.id} >
                            <h3>{quote.philosopher} </h3>
                            <p>{quote.philosopy}</p>
                        </div>
                    </Link>
                )}
        </>
    )
}