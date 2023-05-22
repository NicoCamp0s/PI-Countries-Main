import css from "./detail.module.css";
import * as act from "../../redux/actions";
import { useEffect } from "react";  
import {useNavigate, useParams } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";

const Detail = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const countryDetail = useSelector(state => state.countryDetail);
    console.log(countryDetail);

    useEffect(() => {
        dispatch(act.getCountryDetail(id))}, [id]);

    const handlerBack = () => {
        navigate("/home")
        dispatch(act.clearDetail())
    }

    return (
        !countryDetail ? 
        <div>
            <h3>loading...</h3>
        </div>
        : 
        <div className={css.detailCard}>
            <div >
                <button  onClick={() => handlerBack()} >Back</button>
                <h1>Country: {countryDetail.name}</h1>
                <img src={countryDetail.flags} alt="not found" />
            </div>
            <div className={css.columna}>
                <div className={css.countryDetail}>
                    <h2>Capital: {countryDetail?.capital}</h2>
                    <h3>Continent: {countryDetail.continent}</h3>
                    <h3>Sub-region: {countryDetail?.subregion}</h3>
                    <h3>Area: {countryDetail?.area} Metros cuadrados</h3>
                    <h3>Population: {countryDetail.population} Peoples</h3>
                    <ul>Languages: {countryDetail.languages?.map((l, i) => <li key={i} >{l}</li>)}</ul> 
                </div>
                <div className={css.activityDetail}>
                    <h2>Activities: </h2>
                        { 
                            countryDetail.activities && countryDetail.activities.map(activity => {
                                //console.log(activity);
                                return <div key={activity.id}>
                                    <h4>Name: {activity.name}</h4>
                                    <h4>Difficulty: {activity.difficulty}</h4>
                                    <h4>Duration: {activity.duration} minutes</h4>
                                    <h4>Season: {activity.season}</h4>
                                </div>
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default Detail;