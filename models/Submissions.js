const { DataTypes } = require("sequelize");
const sequelize = require("../utils/DBConfig");
 
const Submissions = sequelize.define(
  "Submissions",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "User", 
        key: "id",
      },
       onDelete: "CASCADE", 
     onUpdate: "CASCADE",
    },
    problemId: { 
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Problems",
        key: "id",
      },
    },
    contestId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Contest",
        key: "id",
      },
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    language: {
      type: DataTypes.STRING(20), // e.g., 'python', 'cpp'
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    verdict: {
      type: DataTypes.ENUM(
        "Accepted",
        "Wrong Answer",
        "TLE",
        "Runtime Error",
        "Compilation Error",
        "Pending"
      ),
      defaultValue: "Pending",
    },
    submittedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Submissions",
    timestamps: false,
  }
);

module.exports = Submissions;
