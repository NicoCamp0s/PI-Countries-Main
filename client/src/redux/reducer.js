import { GET_COUNTRIES } from "./actions";

const initialState = {
    countries: [],
    activities: [],
    createActivity: [],
    countryDetail: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_COUNTRIES:
            console.log(action);
            return {
                ...state,
                countries: action.payload
            }
    
        default:
            return {...state}
    }
}

export default reducer;