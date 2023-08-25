

const Service = require("../Service/Service.js");

exports.index = async (req, res) => {
  try {
    const staff = await Service.Service_index();
    res.json({
      status: "Success",
      message: "Retrieved staff leave requests successfully",
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
    const staff = await Service.Service_view(req.params.Name);
    if (!staff) {
      return res.json({
        status: "Error",
        message: "Staff not found",
      });
    }
    res.json({
      status: "Success",
      message: "Retrieved staff leaverequest details successfully",
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
      Leavetype: req.body.Leavetype,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
      Reason: req.body.Reason,
      Command: req.body.Command,
      Status: req.body.Status,
    };
    const staff = await Service.Service_update(req.params.Name, staffData);
    if (!staff) {
      return res.json({
        status: "Error",
        message: "Staff name not found",
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
    const deletedCount = await Service.Service_Delete(req.params.Name);
    if (deletedCount === 0) {
      return res.json({
        status: "Error",
        message: "Staff Leave request does not found",
      });
    }
    res.json({
      status: "Success",
      message: "Staff leave request deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
