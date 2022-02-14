"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notes.init(
    {
      userId: DataTypes.STRING,
      nama: DataTypes.STRING,
      jadwal: DataTypes.STRING,
      catatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "notes",
    }
  );
  return notes;
};
