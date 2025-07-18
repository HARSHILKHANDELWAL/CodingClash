const sequelize  = require("../utils/DBConfig");

// 📌 Create a new record for any model
const create = async (model, insertData) => {
    const existingMemberIds = [
        "550e8400-e29b-41d4-a716-446655440000",
      "a3c1e2b7-02b6-45d4-9e4a-9b0fbdc4c123"
        
    ]; // Replace with actual member IDs

    const response= await model.create(insertData);
    // response.addMembers(existingMemberIds);
  return response  
};
  
// 📌 Get all records for any model (with optional includes)
const getAll = async(model,associations) => {
  return  await model.findAll({ include: associations });
};  

// 📌 Find a single record by condition
const findById = async (model, id) => {
  return  await model.findByPk(id);
};

// 📌 Update a record by ID
const update = async (model, id, data) => {
  
  const record = await model.findByPk(id);
  if (!record) {
    return res.json({
      success: false,
      message: `${modelName} with ID '${id}' not found`,
    });
  }
  return await record.update(data);
  
};

// 📌 Delete a record by ID
const remove = async (modelName, id) => {

  const instance = await Model.findByPk(id);
  if (!instance) throw new Error(`${modelName} not found`);

  await instance.destroy();
  return { message: `${modelName} deleted successfully` };
};

module.exports = {
  create,
  getAll,
  findById,
  update,
  remove,
};
