const { Activity } = require('../db')

//? funcion para crear una actividad y postearla
const postActivitiesHandler = async (req, res) => {
  const { name, duration, dificulty, season } = req.body;

  try {
    const newActivity = await Activity?.create({name, duration, dificulty, season})

    res.status(200).json(newActivity)

  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

//? funcion para buscar todas las actividades por medio de un get
const activityHandler = async (req, res) => {

  try {
    const activity = await Activity.findAll()
    res.status(200).json(activity);
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

module.exports = {postActivitiesHandler, activityHandler}