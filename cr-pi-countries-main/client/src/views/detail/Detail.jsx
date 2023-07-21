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
        <img src={detail.image} className={style.h1} />
        <h1 >{detail.name}</h1>
        <h3 >Id:  "{detail.id}"</h3>
        <h3 >Continent: {detail.continent}</h3>
        <h3 >Capital:  {detail.capital}</h3>
        <h3 >Subregion: {detail.subregion}</h3>
        <h3 >Area: {detail.area} km²</h3>
        <h3 >Population: {detail.population}</h3>
      </div>
      <div className={style.activity}>
        <h1 className={style.h1}>Activities</h1>
        {
          detail.Activities?.map((acti) => {
            return(
              <div key={acti.id} className={style.h1}> 
                <h1>Name | {acti.name}</h1>
                <h1>Dificulty | {acti.dificulty}</h1>
                <h1>Duration | {acti.duration}</h1>
                <h1>Season |  {acti.season}</h1>
              </div>
            )
          })
        }
      </div>

      <Link to={'/home'}>
        <button className={style.h1}>Exit</button>
      </Link>
    </div>
  )
}

export default Detail;