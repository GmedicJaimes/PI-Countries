import { Link } from 'react-router-dom'

import style from "./Card.module.css"

const Card = ({country}) => {

  const { image, name, continent, id, population} = country;

  return(
    <div className={style.containerPrincipal}>
      <div className={style.image}>
        <img src={image} alt={name} />
      </div>
      <div className={style.containerInfo}>  
        <h2 className={style.h1}>{name}</h2>
        <p className={style.h1}>Continent: {continent}</p>
        <p className={style.h1}>Population: {population.toLocaleString()}</p>

      </div>
      <Link to={`/home/${id}`} className={style.link}>
          <button className={style.buttonCard}>See More</button>
      </Link>
    </div>
    
  )
}


export default Card;