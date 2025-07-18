const { DataTypes } = require("sequelize");
const sequelize = require("../utils/DBConfig");

const Problems = sequelize.define(
  "Problems",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    contestId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Contest",
        key: "id",
      },
       onDelete: "CASCADE", 
     onUpdate: "CASCADE",
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, 
      allowNull: false,
    },
    inputDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    outputDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    constraints: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sampleInput: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sampleOutput: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    maxScore: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    difficulty: {
      type: DataTypes.ENUM("easy", "medium", "hard"),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Problems",
    timestamps: false,
  }
);

module.exports = Problems;
