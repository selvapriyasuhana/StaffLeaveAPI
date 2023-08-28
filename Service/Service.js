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

exports.Service_view = async (user_id) => {
  try {
    return await Dao.Dao_view(user_id);
  } catch (error) {
    throw error;
  }
};
exports.Service_view1 = async (Status) => {
  try {
    return await Dao.Dao_view1(Status);
  } catch (error) {
    throw error;
  }
};


exports.Service_update = async (_id, staffData) => {
  try {
    return await Dao.Dao_update(_id, staffData);
  } catch (error) {
    throw error;
  }
};

exports.Service_Delete = async (_id) => {
  try {
    return await Dao.Dao_Delete(_id);
  } catch (error) {
    throw error;
  }
};
