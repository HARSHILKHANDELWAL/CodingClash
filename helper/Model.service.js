const sequelize = require("../utils/DBConfig");
const modelQuery = require("./Model.query");
// 📌 Create a New Record
const createRecord = async (modelName, insertData, res) => {
  const Model = sequelize.models[modelName];

  if (!Model) {
    return res.json({
      success: false,
      message: `ModelName: ${modelName} not found`,
    });
  }

  const response = await modelQuery.create(Model, insertData);
  
  return res.status(201).json(response);
};

// 📌 Get All Records with Optional Associations
const getAllRecords = async (modelName, res) => {
  console.log(sequelize.models[modelName]);
  const Model = sequelize.models[modelName];

  if (!Model) {
    return res.json({
      success: false,
      message: `ModelName: ${modelName} not found`,
    });
  }
  const associations = Object.values(Model.associations).map((assoc) => assoc.target);

  const response = await modelQuery.getAll(Model,associations);
  return res.status(201).json(response);
};

// 📌 Get a Single Record by Query
const findRecordById = async (modelName, id, res) => {
  const Model = sequelize.models[modelName];
  if (!Model) {
    return res.json({
      success: false,
      message: `ModelName: ${modelName} not found`,
    });
  }

  const response = await modelQuery.findById(Model, id, res);
  return res.status(201).json(response);
};

// 📌 Update Record
const updateRecord = async (modelName, id, data, res) => {
  const Model = sequelize.models[modelName];
  if (!Model) {
    return res.json({
      success: false,
      message: `ModelName: ${modelName} not found`,
    });
  }

  const response = await modelQuery.update(Model, id, data);
  return res.status(201).json(response);
};

// 📌 Delete Record
const deleteRecord = async (modelName, id, res) => {
  const Model = sequelize.models[modelName];
  if (!Model) {
    return res.json({
      success: false,
      message: `ModelName: ${modelName} not found`,
    });
  }
  const record = await Model.findByPk(id);
  if (!record) {
    return res.json({
      success: false,
      message: `${modelName} with ID '${id}' not found`,
    });
  }
  await record.destroy();
  return res.json({ message: `${modelName} deleted successfully` });
};

module.exports = {
  createRecord,
  getAllRecords,
  findRecordById,
  updateRecord,
  deleteRecord,
};
