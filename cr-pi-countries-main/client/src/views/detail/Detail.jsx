import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { getById } from '../../redux/actions';

import style from './Detail.module.css'

const Detail = () => {

  //*obtener el id del pais
  const { id } = useParams();
  const dispatch = useDispatch()

   //* funcion utilizada para acceder al estado global que esta en el store
   const detail = useSelector((state) => state.detail);
  
  //* 
  useEffect(() => {
    dispatch(getById(id));

  }, [dispatch, id])  

  
  return (
    <div className={style.containerPrincipal}>
      
      <div className={style.country}>
        <h1 >{detail.name}</h1>
        <img src={detail.image} className={style.img} /><br />
        <h3 >ID:  "{detail.id}"</h3>
        <h3 >Continent: {detail.continent}</h3>
        <h3 >Capital:  {detail.capital}</h3>
        <h3 >Subregion: {detail.subregion}</h3>
        <h3 >Area: {detail.area?.toLocaleString()} km²</h3>
        <h3 >Population: {detail.population?.toLocaleString()}</h3>
      </div>
      <div className={style.activity}>
        <h1>Activities</h1>
        {
          detail.Activities?.map((acti) => {
            return(
              <div key={acti} className={style.infoActivity}> 
                <h3>Name: {acti.name}</h3>
                <h3>Dificulty: {acti.dificulty}</h3>
                <h3>Duration: {acti.duration} horas</h3>
                <h3>Season:  {acti.season}</h3>
              </div>
            )
          })
        }
      </div>
      
      <Link to={'/home'}>
        <button className={style.button}>Exit</button>
      </Link>
    </div>
  )
}

export default Detail;