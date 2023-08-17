/*Service = require("../Service/Service.js");

exports.index = function (err, staff) {
  Service.Service_index(err, staff);
  if (err) return console.error(err);
};

exports.add = function (err, staff) {
  Service.Service_add(err, staff);
  if (err) return console.error(err);
};

exports.view = function (err, staff) {
  Service.Service_view(err, staff);
  if (err) console.error(err);
};

exports.update = function (err, staff) {
  Service.Service_update(err, staff);
  if (err) console.error(err);
};
exports.Delete = function (err, staff) {
  Service.Service_Delete(err, staff);
  if (err) console.error(err);
};*/

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
        message: "Staff Name not found",
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
        message: "Staff Name not found",
      });
    }
    res.json({
      status: "Success",
      message: "Staff leave request accepted successfully",
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
        message: "Staff Name not found",
      });
    }
    res.json({
      status: "Success",
      message: "Staff leave request rejected successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
