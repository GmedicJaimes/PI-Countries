const validation = (input) => {
  
  const errors = {};

  //errores name
  if(!/^[a-zA-Z\s]+$/.test(input.name)) {errors.name = 'Nombre invalido';}
  if(!input.name) {errors.name = 'Nombre vacio';}
  if(input.name && input.name.length > 30) {errors.name = 'El nombre debe ser menor a 30 caracteres'}

  //errores dificultad
  let dificultadActivo = document.forms["formulario"]['dificulty'].selectedIndex;
  if(!dificultadActivo) {errors.dificulty = 'Selecciona una dificultad'}
  // if(!input.dificulty) {errors.dificulty = 'Selecciona un dificultad'}

  //errores duracion
  let duracionActivo = document.forms["formulario"]['duration'].selectedIndex;
  if(!duracionActivo) {errors.duration = 'Selecciona una duracion'}
  // if(!input.duration) {errors.duration = 'Selecciona una hora'}

  //errores temporada
  let temporadactivo = document.forms["formulario"]['season'].selectedIndex;
  if(!temporadactivo) {errors.season = 'Selecciona un temporada'}
  // if(!input.season) {errors.season = 'Selecciona una temporada'}
  
  //errores paises
  let paisesActivo = document.forms["formulario"]['countries'].selectedIndex;
  if(!paisesActivo) {errors.countries = 'Selecciona un Pais'}

  return errors;
}

export default validation;