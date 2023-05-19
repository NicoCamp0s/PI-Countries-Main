import css from "./form.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as act from "../../redux/actions";
import { Link } from "react-router-dom";
import { Validate } from "../../Helpers/validation";

const Form = () => {

    //declaracion de variables y peticion al reducer
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)
    const [errors, setErrors] = useState({});
    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: 0,
        season: "",
        countries: []
    })

    //render de paises
    useEffect(() => {
        dispatch(act.getCountries())
    }, [])

    //funciones 
    function handleInputChange(e) {
        setActivity({
            ...activity,
            [e.target.name]: e.target.value
        });
        setErrors(Validate({
            ...activity,
            [e.target.name]: e.target.value
        }));
    };

    function handleSelectCountries(e) {
    const selectedOptions = Array.from(e.target.selectedOptions);
    const selectedCountries = selectedOptions.map(option => option.value);
    setActivity(prevActivity => ({
        ...prevActivity,
        countries: selectedCountries,
    }));
    }

    function handleSubmit(e) {
        if (Object.keys(errors).length === 0  && isFormValid()) {
            dispatch(act.createActivity(activity));
            alert("The activity/s were created successfully");
        } else {
            e.preventDefault();
            alert("Please fill in all fields");
        }
    }

    function isFormValid() {
        return (
          activity.name.trim() !== "" &&
          activity.difficulty !== "" &&
          activity.duration !== "" &&
          activity.season.trim() !== ""
        );
    }

    //render
    return (

        <div className={css.formContainer}>
            <h1>Add activities</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="">
                    <label htmlFor="">Name: </label>
                    <input type="text" value={activity.name} name="name" onChange={e => handleInputChange(e)}/>
                    {errors.name && <span className="error">{errors.name}</span>} 
                </div>
                <div className="">
                    <label htmlFor="">Difficulty: </label>
                    <input type="number" min="1" max="5" value={activity.difficulty} name="difficulty" onChange={e => handleInputChange(e)}/>
                    {errors.difficulty && <span className="error">{errors.difficulty}</span>} 
                </div>
                <div className="">
                    <label htmlFor="">Duration: </label>
                    <input type="number"  max="300" value={activity.duration} name="duration" onChange={e => handleInputChange(e)}/>
                    {errors.duration && <span className="error">{errors.duration}</span>} 
                </div>
                <div className="">
                    <label htmlFor="">Season: </label>
                    <input type="text" value={activity.season} name="season" onChange={e => handleInputChange(e)}/>
                    {errors.season && <span className="error">{errors.season}</span>} 
                </div>
                <div>
                    <select defaultValue={[]} onChange={e => handleSelectCountries(e)} multiple className={css.selectorOption}>
                        <option value="default" disabled className={css}>Select country</option>
                        {countries && countries.map(c => {
                           return <option key={c.id}>{c.name}</option>
                        })}
                    </select>
                </div>
                <div className="">
                    <Link to="/home">
                        <button>Back</button>
                    </Link>
                    <button type='submit' className="" >Create</button>
                </div>
            </form>
        </div>
       
    )
}

export default Form;