import { GET_COUNTRIES, GET_BY_NAME, GET_BY_ID, POST_ACTIVITIES, GET_ACTIVITIES, CONTINENT, ORDER, POPULATION, ACTIVITIES} from './actions'

let initialState = { allCountries: [], copyCountries: [], detail: [], allActivities: [] , activityFilter: []}

const reducer = (state = initialState, action) => {

  switch(action.type){
    
    //? action para todos los paises
    case GET_COUNTRIES:
      return { ...state, allCountries: action.payload, copyCountries: action.payload  }
    
    //? action para la busqueda por query 
    case GET_BY_NAME:
      return { ...state, copyCountries: action.payload }

    //? action para la busqueda por id 
    case GET_BY_ID:
      return { ...state, detail: action.payload }

    //? action para postear una actividad
    case POST_ACTIVITIES:
      console.log(action.payload)
      return { ...state, allActivities:[...state.allActivities, action.payload]}

    //? action para traer todas las actividades
    case GET_ACTIVITIES:
      console.log(state.allActivities)
      return { ...state, allActivities: action.payload}

    //? actions para filtros
    case CONTINENT: 
      const continentCountries = state.allCountries
      const continentFiltered = action.payload === 'All' ? continentCountries : continentCountries.filter(element => element.continent === action.payload)

      return { ...state, copyCountries: continentFiltered }

    case ORDER: 
      let ordenados;
      const order = state.copyCountries
      // console.log(countries);
      if( action.payload === 'asc'){
        ordenados = order.sort((a,b) => a.name.localeCompare(b.name));
      } else {
        ordenados = order.sort((a,b) => b.name.localeCompare(a.name));
      } 
      console.log(ordenados)
      return { ...state, copyCountries: action.payload === "order" ? order : [...ordenados]}
      
    case POPULATION: 
      let maxMin;
      const population = state.copyCountries
      if(action.payload === 'min'){
        maxMin = population.sort(function (a,b) {
          if(a.population < b.population){
            return -1;
          }
          if(a.population > b.population){
            return 1;
          }
          return 0;
        })
      } else {
        maxMin = population.sort(function(a,b) {
          if(a.population > b.population){
            return -1;
          }
          if(a.population < b.population){
            return 1;
          }
          return 0;
        })
      } 

      return { ...state, copyCountries: action.payload === 'Population' ? population : [...maxMin]}
    
    case ACTIVITIES: 
      const activityName = action.payload; // El nombre de la actividad a filtrar
      console.log(activityName);
      const filteredCountries = state.allActivities
        .filter((activity) => activity.name === activityName)
        .flatMap((activity) => activity.Countries);

      console.log(filteredCountries)
      return { ...state, copyCountries: filteredCountries };
  
      
    default: 
      return {...state }
  }
}

export default reducer;