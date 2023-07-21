import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Nav/Navbar';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getByName, filterContinent, filterOrder, filterPopulation, filterActivity, getActivities } from '../../redux/actions';

import style from './Home.module.css'
function Home () {

  //* funcion utilizada para enviar acciones a los reducers
  const dispatch = useDispatch();

  //* funcion utilizada para acceder al estado global que esta en el store
  const copyCountries = useSelector((state) => state.copyCountries);
  const actitivies = useSelector((state) => state.allActivities);

  //* estado local busqueda
  const [searchString, setSearchString] = useState('');

  //? funcion para guardar el valor de la busqueda y actualizarlo con setSearchString
  function handleChange(event) {
    event.preventDefault()

    const value = event.target.value.toLowerCase();
    setSearchString(value)
  }

  //? funcion para traer un pais buscado por query
  function handleSubmit(event){
    event.preventDefault()

    dispatch(getByName(searchString))
  }

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities())

  }, [dispatch])

  //! Seccion para filtros
  
  //? funciones para los filtros
  function handlerContinent(event) {
    event.preventDefault()
    const value = event.target.value

    dispatch(filterContinent(value))
  }

  function handlerOrder(event) {
    event.preventDefault()
    const value = event.target.value

    dispatch(filterOrder(value))
  }

  function handlerPopulation(event) {
    event.preventDefault()
    const value = event.target.value

    dispatch(filterPopulation(value))
  }
  
  function handlerActivity(event) {
    event.preventDefault()
    const value = event.target.value

    dispatch(filterActivity(value))
  }

  function handlerReset (event) {
    event.preventDefault()

    dispatch(getCountries())
  }

  return (
    <div>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      {/* <h1 className={style.h1}>Estas en la home page</h1> */}
      
      <div className={style.containerPrincipal}>
        <div className={style.container}>

          <select className={style.filter} onChange={(e) => handlerOrder(e)} defaultValue="order">
            <option value='order'>Order</option>
            <option value="asc" >A - Z</option>
            <option value="desc" >Z - A</option>
          </select>

          <select className={style.filter} onChange={e => handlerPopulation(e)} defaultValue="select">
            <option value="Population">Population</option>
            <option value="min" >Min Population</option>
            <option value="max" >Max Population</option>
          </select>

          <button className={style.filter} onClick={handlerReset}>Reset</button>
        </div>

        <div className={style.container}>
        
          <select className={style.filter} onChange={ e => handlerContinent(e)} defaultValue='All'>
            {
            ['All', "Africa", "Antarctica", "Asia", "Europe", "North America", "South America", "Oceania" ].map(continent => 
              <option value={continent} key={continent}>{continent}</option>)
            }
            
          </select>

          <select className={style.filter} onChange={(e) => handlerActivity(e)} defaultValue='All'>
            <option value="All" >Activity</option>
            {
              actitivies?.map((ele) => (
                <option value={ele.name} key={ele.id}>{ele.name}</option>
              ))
            }
          </select>
        </div>
      </div>
      <Cards copyCountries= {copyCountries} />
            
    </div>
  )
}

export default Home;