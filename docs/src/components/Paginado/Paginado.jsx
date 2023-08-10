import style from './Paginado.module.css'

const Paginado = ({countryPerPage, allCountries, paginado }) => {

  const pageNumbers = [];

  for(let i = 1 ;i <= Math.ceil(allCountries/countryPerPage); i++){
    pageNumbers.push(i)
  }

  return(
    <nav className={style.container}>
      <ul className={style.ul}>
        {
          pageNumbers && pageNumbers.map(num => (
            
            <li key={num} className={style.li}>
              <a onClick={() => paginado(num)}>{num}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Paginado;