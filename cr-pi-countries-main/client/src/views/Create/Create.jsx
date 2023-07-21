import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import validation from './validation';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { postActivity } from '../../redux/actions';



import style from './Create.module.css';

const Create = ({allCountries}) => {

  const countries = allCountries;

  //* funcion utilizada para enviar acciones a los reducers
  const dispatch = useDispatch();


  //* estado local
  const [input, setInput] = useState({
    name: '',
    dificulty: '',
    duration: '',
    season: '',
    countries: []
  })

  //* estado de errores
  const [errors, setErrors] = useState({})

  //* funcion para cargar la info a mi estado local
  function handleChange (event) {
    
    const property = event.target.name;
    const value = event.target.value;

    //* Condicional de si existe un pais, guardarlo en mi array de countries
    if(property === 'countries'){

      if(input.countries.length >= 5){
        return;
      }

      setInput({...input, 
        countries: input.countries.includes(value)
        ? input.countries 
        : [...input.countries, value]
      }); 

    } else {
      setInput((prev) => ({
        ...prev , [property]:value
      }))
    }
    setErrors(validation({...input, [property]:value}));
  }
  
  //* funcion para despachar la info a mi base de datos
  function handleSubmit (event){
    event.preventDefault()

    console.log(dispatch(postActivity(input)))
    setInput({
      name: '',
      dificulty: '',
      duration: '',
      season: '',
      countries: []
    })
    console.log(input)
  }

  //* funcion para borrar un pais seleccionado
  function handleDelete(event) {
    setInput({...input, countries: input.countries.filter(country => country !== event)})
  }
  
  const season = ['Verano','Otoño','Invierno','Primavera'];
  const dificulty = [1, 2, 3, 4, 5];
  const duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  
  return (
    <div>
      <Link to="/home">
        <button className={style.h1}>Exit</button>
      </Link>
      <h1 className={style.h1}>Estas en la create</h1>
      <form name='formulario' onSubmit={handleSubmit}>
        {/* Nombre */}
        <div>
          <label htmlFor="" className={style.h1}>Nombre: </label>

          <input type="text" name='name' value={input.value} onChange={handleChange} className={style.h1}/>
          {
          errors.name && <span className={style.h1}>{errors.name}</span>
          } 
        </div>

        {/* Dificultad */}
        <div>
          <label htmlFor="" className={style.h1}>Dificultad: </label>
            
          <select name="dificulty" onChange={handleChange} required className={style.h1}>
            <option value="" hidden >Select Dificulty</option>
            {dificulty.map(event => (
                <option value={event}  key={event} >{event}</option>
            ))}
          </select>
          {
          errors.dificulty && <span className={style.h1}>{errors.dificulty}</span>
          }
        </div>
        
        {/* Duracion */}
        <div>
          <label htmlFor="" className={style.h1}>Duración: </label>

          <select name="duration" onChange={handleChange} required className={style.h1}>
            <option value="" hidden >Select Duration</option>
            {duration.map(event => (
                <option value={event}  key={event} >{event}</option>
            ))}
          </select>
          {
          errors.duration && <span className={style.h1}>{errors.duration}</span>
          }
        </div>
        
        {/* Temporada */}
        <div>
          <label htmlFor="" className={style.h1}>Temporada: </label>
          
          <select name="season" onChange={handleChange} required className={style.h1}>
            <option value="" hidden >Select Season</option>
            {season.map(event => (
                <option value={event}  key={event} >{event}</option>
            ))}
          </select>
          {
          errors.season && <span className={style.h1}>{errors.season}</span>
          }  
        </div>
        
        {/* Paises */}
        <div>
          <label htmlFor=""className={style.h1}>Seleccionar Paises: </label>
          <select type="text" id='countries' name='countries' onChange={handleChange} className={style.h1} value={input.value} >
            <option value="" className={style.h1}>Select Country</option>
              {
                //* mapeo de los paises , para mostrar todas las opciones en el select
                countries?.map((pais) => (
                  <option key={pais.id} value={pais.id} className={style.h1}>
                    {pais.name}
                  </option>
                ))
              }
          </select>
          {
            errors.countries && <span className={style.h1}>{errors.countries}</span>
          }
        </div>
        <div>
          <ul>
            <li className={style.h1}>
              {/* {console.log(input.countries)} */}
              {
              input.countries.map(country =>
                <div key={country}>
                  {country}
                  <button onClick={() => handleDelete(country)} type="button">X</button>
                </div>)
              }
            </li>
          </ul>
        </div>

        
        <button type='submit' className={style.h1}>Crear Actividad</button>
        <input type="reset" />
        
      </form>

    </div>
  )
}

export default Create;