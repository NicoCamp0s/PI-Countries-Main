import css from "./home.module.css";
import { Link } from "react-router-dom";
import * as act from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import Cards from "../../Components/Cards/Cards";
import Paginate from "../../Components/Paginate/Paginate";
import SearBar from "../../Components/NavBar/navBar";

//! REVISAR LAS ACTIVITIES

const Home = () => {

    const dispatch = useDispatch();
    const country = useSelector(state => state.countries);
    
    useEffect(() => {
        dispatch(act.getCountries())
    }, [dispatch]);

    const [home, setHome] = useState(true) 
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const lastCountry = countriesPerPage * currentPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountries = country?.slice(firstCountry, lastCountry)

    const paginate = (number) => {
        setCurrentPage(number)
        window.scrollTo(0, 0);
    };
    
    const handleOrderByName = (e) => {
        dispatch(act.orderByName(e.target.value))
        //home ? setHome(false) : setHome(true)
    }

    const handleOrderByPopulation = (e) => {
        dispatch(act.orderByPopulation(e.target.value))
        //home ? setHome(false) : setHome(true)
    }

    const handleFilter = (e) => {
        dispatch(act.FilterByContinent(e.target.value))
        //home ? setHome(false) : setHome(true)
    }

    const handleFilterActivity = (e) => {
        dispatch(act.getActivities(e.target.value))

    }

    return (
        !country ?
        <div>
            <h2>loading...</h2>
        </div>
        : country ?
        <div className={css.home}>
            <div className={css.barraSuperior}>
                <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ83pSr56Ikx23kegBZxYZfJ6Tp2_zI9SQ4DA&usqp=CAU" alt="logo" height="60" width="90"></img></Link>
                <SearBar></SearBar>
                <select onChange={e => handleOrderByName(e)} defaultValue="default" className="" >
                    <option value="default" >Alphabetical order</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
                <select onChange={e => handleOrderByPopulation(e)} defaultValue="default" className="">
                    <option value="default" >Order By Population</option>
                    <option value="asc">Lower</option>
                    <option value="desc">Higher</option>
                </select>
                <select onChange={e => handleFilter(e)} defaultValue="default" className="">
                    <option value="default" >Filter by continent</option>
                    <option value="South America">South America</option>
                    <option value="Europe">Europe</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">North America</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <select onChange={e => handleFilterActivity(e)} defaultValue="default">
                    <option value="default">Filter by activity</option>
                    <option value="All">All</option>
                    <option value="Summer">Summer</option>
                    <option value="Spring">Spring</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                </select>
                <Link to="/create"className={css.addActivityBtn}>
                    <button>Add new activity</button>
                </Link>
            </div>
            <div className={css.muestraCards}>
                {
                    currentCountries?.map((c) => {
                        return (
                            <Cards key={c.id} img={c.flags} name={c.name} capital={c.capital} continent={c.continent} id={c.id} />
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