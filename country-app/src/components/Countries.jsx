import Country from './Country'
import { v4 as uuidv4 } from "uuid";

const Countries = (porps) => {
  return (
    <section>
        {
            porps.countries.map((country) => {
                const countyNew = {country, id: uuidv4()}
                return (
                    <Country {... countyNew} key={countyNew.id} />
                )
            })
        }
    </section>
  )
}

export default Countries;