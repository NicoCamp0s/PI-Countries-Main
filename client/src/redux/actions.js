import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const GET_BY_NAME = "GET_BY_NAME";
export const ORDER_BY_POPULATION = "ORDER_BY_POPULATION";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const FILTER_ACTIVITY = "FILTER_ACTIVITY";

//! REVISAR GETACIVITIES Y CREAR LA ACCION DE RENDERIZAR ESAS CARTRAS CON ACVITIDIADES


export const getCountries = () => {
    return async function(dispatch) {
        try {
            const {data} = await axios.get("http://localhost:3001/countries")
            dispatch({
                type: GET_COUNTRIES,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getCountryDetail = (id) => {
    return async function(dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            dispatch({
                type: GET_COUNTRY_DETAIL,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const clearDetail = () => {
    return async function(dispatch) {
        dispatch({
            type: CLEAR_DETAIL
        })
    }
}

//! revisar que me traiga todas las actividades y realizar el filtro de estas...
export const getActivities = () => {
    return async function (dispatch){
        const response = await axios.get("http://localhost:3001/activities")
        //console.log(response.data);
        dispatch({
            type: GET_ACTIVITIES,
            payload: response.data
        })
    }
}

export const FilterByActivity = (a) => {
    return async function(dispatch) {
        dispatch({
            type: FILTER_ACTIVITY,
            payload: a
        })
    }
}

export const getByName = (name) => {
    return async function(dispatch) {
        const {data} = await axios.get(`http://localhost:3001/countries?name=${name}`)
        // //* filtro por y lo guardo en una variable
        // const filteredCountries = data.filter( country =>
        //     country.name.toLowerCase().includes(name.toLowerCase())
        // );
        dispatch({
            type: GET_BY_NAME,
            payload: data
        })
    }
}

export const orderByName = (n) => {
    return function (dispatch) {
        dispatch({
            type: ORDER_BY_NAME,
            payload: n
        })
    }
}

export const orderByPopulation = (s) => {
    return function (dispatch) {
        dispatch({
            type: ORDER_BY_POPULATION,
            payload: s
        })
    }
}

export function FilterByContinent(c) {
    return {
        type: FILTER_BY_CONTINENT,
        payload: c
    };
}

export const createActivity = ({name, difficulty, duration, season, countries}) => {
    return async function (dispatch) {
        const response = await axios.post("http://localhost:3001/activity", {
            name,
            difficulty,
            duration,
            season,
            countries
        })
        dispatch({
            type: CREATE_ACTIVITY,
            payload: response.data
        })
    }
}