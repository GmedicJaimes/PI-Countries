const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const getAllCountries = require("./src/controllers/getAllCountries");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    console.log('Database connectd');

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);  
      getAllCountries();   
  })
}).catch(error => console.error(error))
