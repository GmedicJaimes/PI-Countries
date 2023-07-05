const axios = require('axios');
const URL = "http://localhost:5000/countries";

const { Country } = require('../db')

const getAllCountries = async () => {
  try {
    const { data } = await axios.get(URL);
    const infoCountries = data.map(info => ({
      id: info.cca3,
      name: info.name.common,
      image: info.flags.svg,
      continent: info.continents[0],
      capital: info.capital ? info.capital[0] : "Not Found",
      subregion: info.subregion ? info.subregion[0] : "Not Found",
      area: info.area,
      population: info.population
    }))

    await Country.bulkCreate(infoCountries)

    // res.status(200).send("Countries create in database")
  } catch (error) {
    // res.status(500).json(error.message)
  }
}

module.exports = getAllCountries;