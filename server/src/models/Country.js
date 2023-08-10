const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
      //* getter usado para convertir un numero pegado, separado por puntos. Ej: number: 12450500 ===> 12.450.500
      // get() {
      //   const value = this.getDataValue('area');
      //   return value ? value.toLocaleString('es-ES') : null;
      // },
    },
    population: {
      type: DataTypes.INTEGER,
      //* getter usado para convertir un numero pegado, separado por puntos. Ej: number: 12450500 ===> 12.450.500
      // get() {
      //   const value = this.getDataValue('population');
      //   return value.toLocaleString('es-ES');
      // },
      allowNull: false
    }
  }, { timestamps: false});
};