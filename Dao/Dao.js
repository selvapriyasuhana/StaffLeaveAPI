
const staff_Leaverequest = require("../Model/models.js");

exports.Dao_index = async () => {
  try {
    return await staff_Leaverequest.find();
  } catch (error) {
    throw error;
  }
};

exports.Dao_view = async (user_id) => {
  try {
    return await staff_Leaverequest.findById(user_id); // Use "user_id" directly
  } catch (error) {
    throw error;
  }
};
exports.Dao_view1 = async (Status) => {
  try {
    return await staff_Leaverequest.findByStatus(Status);
  } catch (error) {
    throw error;
  }
};

exports.Dao_update = async (_id, staffData) => {
  try {
    return await staff_Leaverequest.findByIdAndUpdate(_id, staffData, {
      new: true,
    });
  } catch (error) {
    throw error;
  }
};

exports.Dao_Delete = async (_id) => {
  try {
    const result = await staff_Leaverequest.deleteOne({ _id });
    return result.deletedCount;
  } catch (error) {
    throw error;
  }
};
