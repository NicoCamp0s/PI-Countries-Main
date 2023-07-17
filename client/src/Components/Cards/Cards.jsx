import css from "./cards.module.css"
import { Link } from "react-router-dom";
 
const Cards = (props) => {

    const {img, name, continent, id, capital, population} = props;

    return (
        <div className={css.card}>
            <Link to={`/countries/${id}`} key={id} className={css.noUnderline}>
                <h2>{name}</h2>
            <img src={img} alt="not found" width="300px" height="225px" className="" />
            </Link>
            <div>
                <h3>Continent: {continent}</h3>
                <h4>Capital: {capital}</h4>
                {/* <h4>{population}</h4> */}
                {/* la "i" esta para agregar una clave unica a cada elemento de la lista de lenguajes */}
                {/* <ul>Languages: {languages?.map((l, i) => <li key={i} className={css.noBullet}>{l}</li>)}</ul> */}
            </div>
        </div>
    )
}

export default Cards;