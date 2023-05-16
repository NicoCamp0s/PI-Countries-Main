import { Link } from "react-router-dom";
 
const Cards = (props) => {

    const {img, name, continent, id, languages} = props;

    return (
        <div key={id}>
            <Link to={`/country/${id}`}>
                <h2>{name}</h2>
            <img src={img} alt="not found" width="300px" height="225px" className="" />
            </Link>
            <div>
                <h3>Continent: {continent}</h3>
                <ul>Languages: {languages?.map(l => <li>{l}</li>)}</ul>
            </div>
        </div>
    )
}

export default Cards;