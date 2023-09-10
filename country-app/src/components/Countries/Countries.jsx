import { v4 as uuidv4 } from "uuid";
import Country from '../Country/Country';
import style from "./Counties.module.css";

const Countries = (porps) => {
  return (
    <section className={style.countries}>
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