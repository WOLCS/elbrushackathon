const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const File = sequelize.define("Files", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  caption: { type: DataTypes.STRING },
  link: { type: DataTypes.STRING, allowNull: false },
});

const Scheme = sequelize.define("Schemes", {
  schemeId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  startSchemeNodeId: { type: DataTypes.STRING, allowNull: false },
});

const SchemeNode = sequelize.define("SchemeNodes", {
  schemeNodeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

const Element = sequelize.define("Elements", {
  elementId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  elementType: { type: DataTypes.STRING, allowNull: false },
  elementText: { type: DataTypes.STRING, allowNull: false },
  schemeId: { type: DataTypes.INTEGER },
  schemeNodeId: { type: DataTypes.INTEGER },
});

const User = sequelize.define("Users", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  login: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
});

Scheme.hasMany(SchemeNode, { as: "schemeNodes" });
SchemeNode.belongsTo(Scheme);

SchemeNode.hasMany(Element, { as: "elements" });
Element.belongsTo(SchemeNode);

module.exports = {
  File,
  SchemeNode,
  Scheme,
  Element,
  User,
};
