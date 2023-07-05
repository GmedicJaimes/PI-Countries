const { Country, Activity } = require('../db')
const { Op } = require('sequelize');



//? funcion para buscar todos los paises y traer uno por query
const searchHandler = async (req, res) => {
  const { name } = req.query;

  try {
    
    if(name){
      //? tercera ruta por query
      const country = await Country.findAll({
        where: {
          name: {
            //*comparacion de texto insensible a mayusculas y minusculas
            [Op.iLike]: `%${name}%`
          }
        }
      })

      res.status(200).json(country)
    } else {
      //?primera ruta get
      const countrys = await Country.findAll();
      res.status(200).json(countrys)
    }
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

//? funcion para traer un pais por medio de un get por el id
const idByHandler = async (req, res) => {
  const { idPais } = req.params;
  try {

    const findId = await Country.findByPk(idPais, 
    {
      //* de esta manera podemos incluir la informacion de las actividades en un pais
      include: {
        model: Activity,
        attributes: ['name', 'dificulty', 'duration', 'season'],
        through: {
          attributes: []
        }
      },
      attributes: { exclude: ["Country_Activity"]}  
    })
    
    res.status(200).json(findId)

  } catch (error) {
    res.status(404).json({error: error.message})
  }
}


module.exports = { searchHandler, idByHandler}