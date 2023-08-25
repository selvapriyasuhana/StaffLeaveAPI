
const Dao = require("../Dao/Dao.js");

exports.Service_index = async () => {
  try {
    return await Dao.Dao_index();
  } catch (error) {
    throw error;
  }
};

exports.Service_add = async (staff) => {
  try {
    return await Dao.Dao_add(staff);
  } catch (error) {
    throw error;
  }
};

exports.Service_view = async (Name) => {
  try {
    return await Dao.Dao_view(Name);
  } catch (error) {
    throw error;
  }
};

exports.Service_update = async (Name, staffData) => {
  try {
    return await Dao.Dao_update(Name, staffData);
  } catch (error) {
    throw error;
  }
};

exports.Service_Delete = async (Name) => {
  try {
    return await Dao.Dao_Delete(Name);
  } catch (error) {
    throw error;
  }
};
