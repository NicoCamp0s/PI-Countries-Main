import * as act from "./actions";

const initialState = {
    countries: [],
    activities: [],
    createActivity: [],
    countryDetail: []
}

const reducer = (state = initialState, action) => {
    switch (action.payload) {
        
        case act.GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
    
        default:
            return {...state}
    }
}

export default reducer;