
const staff_Leaverequest = require("../Model/models.js");

exports.Dao_index = async () => {
  try {
    return await staff_Leaverequest.find();
  } catch (error) {
    throw error;
  }
};

exports.Dao_view = async (Name) => {
  try {
    return await staff_Leaverequest.findOne({ Name });
  } catch (error) {
    throw error;
  }
};

exports.Dao_update = async (Name, staffData) => {
  try {
    return await staff_Leaverequest.findOneAndUpdate({ Name }, staffData, {
      new: true,
    });
  } catch (error) {
    throw error;
  }
};

exports.Dao_Delete = async (Name) => {
  try {
    const result = await staff_Leaverequest.deleteOne({ Name });
    return result.deletedCount;
  } catch (error) {
    throw error;
  }
};
