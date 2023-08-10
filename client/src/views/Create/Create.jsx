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
    alert('Actividad Creada')
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
    <div className={style.containerPrincipal}>

      <div className={style.containerImg}></div>
      
      <form name='formulario' onSubmit={handleSubmit} className={style.containerForm}>
        {/* Nombre */}
        <h1 className={style.title}>Crea tu Actividad en tu pais Favorito</h1>
        
        <div className={style.select}>
          <label htmlFor="" >Nombre: </label>

          <input type="text" name='name' value={input.value} onChange={handleChange} />
          {
          errors.name && <span >{errors.name}</span>
          } 
        </div>

        {/* Dificultad */}
        <div className={style.select}>
          <label htmlFor="" >Dificultad: </label>
            
          <select name="dificulty" onChange={handleChange} required >
            <option value="" hidden >Select Dificulty</option>
            {dificulty.map(event => (
                <option value={event}  key={event} >{event}</option>
            ))}
          </select>
          {
          errors.dificulty && <span >{errors.dificulty}</span>
          }
        </div>
        
        {/* Duracion */}
        <div className={style.select}>
          <label htmlFor="" >Duración: </label>

          <select name="duration" onChange={handleChange} required >
            <option value="" hidden >Select Duration</option>
            {duration.map(event => (
                <option value={event}  key={event} >{event}</option>
            ))}
          </select>
          {
          errors.duration && <span >{errors.duration}</span>
          }
        </div>
        
        {/* Temporada */}
        <div className={style.select}>
          <label htmlFor="" >Temporada: </label>
          
          <select name="season" onChange={handleChange} required >
            <option value="" hidden >Select Season</option>
            {season.map(event => (
                <option value={event}  key={event} >{event}</option>
            ))}
          </select>
          {
          errors.season && <span>{errors.season}</span>
          }  
        </div>
        
        {/* Paises */}
        <div className={style.select}>
          <label htmlFor="" >Seleccionar Paises: </label>
          <select type="text" id='countries' name='countries' onChange={handleChange}  value={input.value} className={style.selectPaises}>
            <option value="" >Select Country</option>
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
            errors.countries && <span >{errors.countries}</span>
          }
        </div>
        <div className={style.paises}>
          <ul>
            <li >
              {
              input.countries.map(country =>
                <div key={country}>
                  {country}
                  <button onClick={() => handleDelete(country)} type="button" className={style.close}>X</button>
                </div>)
              }
            </li>
          </ul>
        </div>

        
        
        {
          errors.name ? null : <button type='submit' className={style.buttonReset}>Crear Actividad</button>
        }
        <input type="reset" className={style.buttonReset}/>
        
      </form>
      <Link to="/home">
        <button className={style.button}>Exit</button>
      </Link>

    </div>
  )
}

export default Create;