import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import { useState } from "react";

import style from "./Cards.module.css"

const Cards = ({copyCountries}) => {

  const countriesList = copyCountries;

  //! Paginado
  //* estado local paginado
  const [countryPerPage, setCountryPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastCountry = currentPage * countryPerPage;
  const firstCountry = lastCountry - countryPerPage;
  const currentCountries = countriesList.slice(firstCountry, lastCountry)

  // console.log(currentCountries)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
    
  }

  return(
    
    <div className={style.container}>
      <div className={style.list}>
        
        <Paginado 
          countryPerPage={countryPerPage}
          allCountries={countriesList.length}
          paginado={paginado}
        />
        
      </div>
      <div className={style.cards}>
      {
        currentCountries?.map( (pais) => (
          <Card country = {pais} key ={pais.id}/>
        ))
      }
      </div>
      
    </div>
  )
}

export default Cards;