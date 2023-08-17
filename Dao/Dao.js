/*const staff_Leaverequest = require("../Model/models.js");

exports.Dao_index = function (req, callback) {
  staff_Leaverequest.find(function (err, staff) {
    if (err) {
      callback.json({
        status: "Error",
        message: err,
      });
    } else {
      callback.json({
        status: "Success",
        message: "Retrieved staff leave requests successfully",
        data: staff,
      });
    }
  });
};

exports.Dao_view = function (req, callback) {
  staff_Leaverequest.findOne({ Name: req.params.Name }, function (err, staff) {
    if (err) {
      callback.json({
        status: "Error",
        message: err,
      });
    } else if (!staff) {
      callback.json({
        status: "Error",
        message: "Staff Name not found",
      });
    } else {
      callback.json({
        status: "Success",
        message: "Retrieved staff leaverequest details successfully",
        data: staff,
      });
    }
  });
};

exports.Dao_update = function (req, callback) {
  staff_Leaverequest.findOne({ Name: req.params.Name }, function (err, staff) {
    if (err) {
      callback.json({
        status: "Error",
        message: err,
      });
    } else if (!staff) {
      callback.json({
        status: "Error",
        message: "Staff Name not found",
      });
    } else {
      staff.Name = req.body.Name;
      staff.Leavetype = req.body.Leavetype;
      staff.StartDate = req.body.StartDate;
      staff.EndDate = req.body.EndDate;
      staff.Reason = req.body.Reason;
      staff.Command = req.body.Command;
      staff.Status = req.body.Status;
      staff.save(function (err, updatedStaff) {
        if (err) {
          callback.json({
            status: "Error",
            message: "An error occurred",
            error: err.message,
          });
        } else {
          callback.json({
            status: "Success",
            message: "Staff leave request updated successfully",
            data: updatedStaff,
          });
        }
      });
    }
  });
};

exports.Dao_Delete = function (req, callback) {
  staff_Leaverequest.deleteOne(
    { Name: req.params.Name },
    function (err, result) {
      if (err) {
        callback.json({
          status: "Error",
          message: "An error occurred",
          error: err.message,
        });
      } else if (result.deletedCount === 1) {
        callback.json({
          status: "Success",
          message: "Staff leave request deleted successfully",
        });
      } else {
        callback.json({
          status: "Error",
          message: "Staff Name not found",
        });
      }
    }
  );
};*/

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
