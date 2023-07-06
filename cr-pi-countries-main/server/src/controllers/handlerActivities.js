const { Activity, Country } = require('../db')

//! funcion para crear una actividad y relacionarla con mi paises
const postActivitiesHandler = async (req, res) => {
  const { name, duration, dificulty, season, countries} = req.body;
  
  try {
    //* control de error, si llega a faltar informacion
    if(!name || !duration || !dificulty || !season || !countries || countries.length === 0) { throw new Error('insufficient information')}

    //? Crear la actividad turistica en la base de datos
    const newActivity = await Activity.create({name, duration, dificulty, season})

    //? Relacionar la actividad con los paises indicados
    await newActivity.setCountries(countries)

    //? Obtener la actividad con la relacion a los paises asociados
    const activityCountry = await Activity.findByPk(newActivity.id, {
      include: {
        model: Country,
        attributes: ['id', 'name']
      }
    })

    //*control de error, por si la actividad no fue creada
    if(!newActivity) throw new Error('Activity dont create')
    res.status(200).json(newActivity)

  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

//? funcion para buscar todas las actividades por medio de un get
const activityHandler = async (req, res) => {

  try {
    const activity = await Activity.findAll()
    if(activity.length === 0) throw new Error('The Activity does not exist')
    res.status(200).json(activity);
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = {postActivitiesHandler, activityHandler}