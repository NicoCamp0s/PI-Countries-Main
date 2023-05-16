import axios from "axios";
export const GET_COUNTRIES = "GET_COUNTRIES";

//! REVISAR COMO LLEGA

export const getCountries = () => {

    return async function(dispatch) {

        try {
            const {data} = await axios.get("http://localhost:3001/countries")
            console.log(data);
            dispatch({
                type: GET_COUNTRIES,
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}