const router = require("express").Router();
const staff_Leaverequest = require("../Model/models");

router.get("/", (req, res) => {
  res.json({
    status: "API Works",
    message: "Welcome to Staff leaveRequest API",
  });
});

router.post("/register", async (req, res) => {
  try {
    const staff = new staff_Leaverequest({
      Name: req.body.Name,
      Leavetype: req.body.Leavetype,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
      Reason: req.body.Reason,
      Command: req.body.Command,
      Status: req.body.Status,
    });

    await staff.save();

    return res.json({
      message: "New staff leaverequest",
      data: staff,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
});

const Controller = require("../Controller/Controller.js");
router.route("/get_all").get(Controller.index);

router
  .route("/:user_id")
  .get(Controller.view)
  .patch(Controller.update)
  .put(Controller.update)
  .delete(Controller.Delete);

module.exports = router;
