const { Country, Activity } = require('../db')
const { Op } = require('sequelize');

//! funcion para buscar todos los paises y traer uno por query
const searchHandler = async (req, res) => {
  
  try {
    const { name } = req.query;

    if(name){
      //? tercera ruta por query
      //? metodo por el cual usamos para buscar el pais que deseamos por medio del nombre
      const countryFind = await Country.findAll({
        where: {
          name: {
            //*comparacion de texto insensible a mayusculas y minusculas.
            [Op.iLike]: `%${name}%`
          }
        }
      })
      //* control de error por si el pais no existe.
      if(countryFind.length === 0) {
        return res.status(404).json({error: 'Country does not exist'})
      }
      res.status(200).json(countryFind) //* respuesta correcta si se consigue el pais deseado
    } else {
      //?primera ruta get
      const countrys = await Country.findAll();
      res.status(200).json(countrys)
    }
    
  } catch (error) {
    res.status(404).json({error: error.message})
  }
}

//! funcion para traer un pais por medio de un get por el id
const idByHandler = async (req, res) => {
  try {
    const { idPais } = req.params;

    //? metodo para buscar por medio del id el pais que deseamos
    const findId = await Country.findByPk(idPais, 
      { 
        
        //* de esta manera podemos incluir la informacion de las actividades en un pais
        include: [
          {
            model: Activity,
            through: { attributes: []},
            // attributes: ['name', 'dificulty', 'duration', 'season'],
             
          }
        ],
        
      })
      if(!findId) throw new Error('Id not exists')//* control de error por si el ID es incorrecto

    res.status(200).json(findId) //* envio de respuesta por json

  } catch (error) {
    res.status(404).json({error: error.message})
  }
}


module.exports = { searchHandler, idByHandler}