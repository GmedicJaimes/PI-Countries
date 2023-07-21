import axios from 'axios';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_BY_ID = 'GET_BY_ID';
export const POST_ACTIVITIES = 'POST_ACTIVITIES';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const CONTINENT = 'CONTINENT';
export const ORDER = 'ORDER';
export const POPULATION = 'POPULATION';
export const ACTIVITIES = 'ACTIVITIES'



//* funcion para traer toda la info de la base de datos
export const getCountries = () => {

  return async function (dispatch) {

    const { data } = await axios(`http://localhost:3001/countries`);

    return dispatch({
      type: "GET_COUNTRIES",
      payload: data
    })
  }
}

//* funcion para traer un pais recibido por query
export const getByName = (name) => {

  return async function (dispatch) {

    const { data } = await axios(`http://localhost:3001/countries/?name=${name}`);

    return dispatch({
      type: "GET_BY_NAME",
      payload: data
    })
  }
}

//* funcion para traer un pais recibido por params
export const getById = (id) => {

  return async function (dispatch) {

    const { data } = await axios(`http://localhost:3001/countries/${id}`);

    return dispatch({
      type: "GET_BY_ID",
      payload: data
    })
  }
}

//* funcion para postear una actividad a mi base de datos
export const postActivity = (activity) => {

  return async function (dispatch) {

    const { data } = await axios.post(`http://localhost:3001/activities/`, activity);

    // return response;
    console.log(data)
    return dispatch({
      type: "POST_ACTIVITIES",
      payload: data
    })
  }
}

//* funcion para mostrar las actividades de mi base de datos
export const getActivities = () => {

  return async function (dispatch) {

    const { data } = await axios(`http://localhost:3001/activities/`);

    return dispatch({
      type: "GET_ACTIVITIES",
      payload: data
    })
  }
}

export const filterContinent = (payload) =>{
  console.log(payload);
  return {
    type: "CONTINENT",
    payload
  }
}

export const filterOrder = (payload) => {
  return {
    type: "ORDER", 
    payload
  }
}

export const filterPopulation = (payload) => {
  return {
    type: "POPULATION",
    payload
  }
}

export const filterActivity = (payload) => {
  return {
    type: "ACTIVITIES",
    payload
  }
}