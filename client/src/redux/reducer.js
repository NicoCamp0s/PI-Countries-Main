import * as act from "./actions";

//! HACER FILTRO, METODOS DE ORDENAMIENTO Y REVISAR EL FORM

const initialState = {
    countries: [],
    copyCountries: [],
    continent: [],
    activities: [],
    countryDetail: [],
    allActivities: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case act.GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                copyCountries: action.payload
            }

        case act.GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }

        case act.CLEAR_DETAIL:
            return {
                ...state,
                countryDetail: null
            }
        
        case act.GET_BY_NAME:
            return {
                ...state,
                countries: action.payload
            }

            case act.ORDER_BY_NAME:
                if (action.payload !== "default") {
                  const countriesSorted = action.payload === 'asc' ?
                  [...state.copyCountries].sort((a, b) => {
                      if (a.name > b.name) return 1;
                      if (b.name > a.name) return -1;
                      return 0;
                    }) :
                    [...state.copyCountries].sort((a, b) => {
                      if (a.name > b.name) return -1;
                      if (b.name > a.name) return 1;
                      return 0;
                    });
              
                  return {
                    ...state,
                    countries: countriesSorted
                  };
                } else {
                  return {
                    ...state,
                    countries: state.copyCountries
                  };
                }

        case act.ORDER_BY_NAME:
          if(action.payload !== "default") { 
            const countriesSorted = action.payload === 'asc' ?
            [...state.countries].sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (b.name > a.name) return -1;
                    return 0;
                }) :
                [...state.countries].sort((a, b) => {
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0;
                })
            return {
                ...state,
                countries: countriesSorted
            }
        } else {
            return {
                ...state,
                countries: state.copyCountries
            }
        }

        case act.ORDER_BY_POPULATION:
        if(action.payload !== "default") {
            const countriesByPopulation = action.payload === 'asc' ?
            [...state.countries].sort((a, b) => {
                    if (a.population > b.population) return 1;
                    if (b.population > a.population) return -1;
                    return 0;
                }) :
                [...state.countries].sort((a, b) => {
                    if (a.population > b.population) return -1;
                    if (b.population > a.population) return 1;
                    return 0;
                });
            return {
                ...state,
                countries: countriesByPopulation
            }
        } else {
            return {
                ...state,
                countries: state.copyCountries
            }
        }

        case act.FILTER_BY_CONTINENT:
            if(action.payload !== "default") {
                const countries = state.copyCountries;
                const filterContinent = countries.filter(e => e.continent.includes(action.payload))
                return {
                    ...state,
                    countries: filterContinent,
                }
                } else {
                    return {
                        ...state,
                        countries: state.copyCountries,
                    }
                }
        
        case act.GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        
        //! REVISAR
        case act.FILTER_ACTIVITY:
            if(action.payload === "All") {
                const countries = state.copyCountries;
                const countriesAct = countries.filter(c => c.activities.find(a =>a.season !== action.payload))
                return {
                    ...state,
                    countries: countriesAct,
                }
            }

            if(action.payload !== "default") {
                const countries = state.copyCountries;
                const countriesAct = countries.filter(c => c.activities.find(a =>a.season === action.payload))
                console.log(countries[0].activities);
                console.log(countriesAct);
                return {
                    ...state,
                    countries: countriesAct
                }
            }
            return {
                ...state,
                countries:  state.copyCountries,
            }

        default:
            return {...state}
    }
}

export default reducer;