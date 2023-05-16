//import css from "./landing.module.css";
import { Link } from "react-router-dom";
import * as act from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import Cards from "../../Components/Cards/Cards";
import Paginate from "../../Components/Paginate/Paginate";

const Home = () => {

    const dispatch = useDispatch();
    const country = useSelector(state => state.countries);


    useEffect(() => {
        dispatch(act.getCountries())
    }, [dispatch]);


    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const lastCountry = countriesPerPage * currentPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountries = country?.slice(firstCountry, lastCountry)

    const paginate = (number) => {
        setCurrentPage(number)
        window.scrollTo(0, 0);
    };

    console.log(country);
    return (
        !country ?
        <div>
            loading...
        </div>
        : country ?
        <div className="home">
            <div className="barraSuperior">
                <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83pSr56Ikx23kegBZxYZfJ6Tp2_zI9SQ4DA&usqp=CAU" alt="logo" height="60" width="90"></img></Link>
                <Link to="/form" ><button> Add new activity </button></Link>
            </div>
            <div className="muestraCards">
                {
                    currentCountries?.map((c) => {
                        return (
                            <Cards img={c.flags} name={c.name} continent={c.continent} languages={c.languages} />
                        )
                    })
                }
            </div>
            <br />
            <div>
                <Paginate 
                onClick= {() => window.scrollTo(0.0)}
                countriesPerPage={countriesPerPage}
                countries={country?.length}
                paginate={paginate}
                currentPage={currentPage}
                />
            </div>  
        </div> : "countries not found"
    )
}

export default Home;