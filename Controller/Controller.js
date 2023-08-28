
const Service = require("../Service/Service.js");

exports.index = async (req, res) => {
  try {
    const staff = await Service.Service_index();
    res.json({
      status: "Success",
      message: "ALL staff leave requests retrieved successfully",
      data: staff,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.view = async (req, res) => {
  try {
    const staff = await Service.Service_view(req.params.user_id);
    if (!staff) {
      return res.json({
        status: "Error",
        message: "Staff  id not found",
      });
    }
    res.json({
      status: "Success",
      message: "staff leaverequest details GET by _id successfully",
      data: staff,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const staffData = {
      Command: req.body.Command,
      Status: req.body.Status,
    };

    const staff = await Service.Service_update(req.params.user_id, staffData);
    if (!staff) {
      return res.json({
        status: "Error",
        message: "Staff id not found",
      });
    }
    res.json({
      status: "Success",
      message: "Staff leave request updated successfully",
      data: staff,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

exports.Delete = async (req, res) => {
  try {
    const deletedCount = await Service.Service_Delete(req.params.user_id);
    if (deletedCount === 0) {
      return res.json({
        status: "Error",
        message: " Given staff id not found for deleting",
      });
    }
    res.json({
      status: "Success",
      message: "Given staff id leave request deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

