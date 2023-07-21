const validation = (input) => {
  
  const errors = {};

  //errores name
  if(!/^[a-zA-Z\s]+$/.test(input.name)) {errors.name = 'Nombre invalido';}
  if(!input.name) {errors.name = 'Nombre vacio';}
  if(input.name && input.name.length > 30) {errors.name = 'El nombre debe ser menor a 30 caracteres'}

  //errores dificultad
  if(!input.dificulty) {errors.dificulty = 'Selecciona un dificultad'}

  //errores duracion
  if(!input.duration) {errors.duration = 'Selecciona una hora'}

  //errores temporada
  if(!input.season) {errors.season = 'Selecciona una temporada'}
  
  //errores paises
  let paisesActivo = document.forms["formulario"]['countries'].selectedIndex;
  if(!paisesActivo) {errors.countries = 'Selecciona un Pais'}

  return errors;
}

export default validation;