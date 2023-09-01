const router = require("express").Router();
const staff_Leaverequest = require("../Model/models.js");

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
router.route("/user/get_all").get(Controller.index);
router.route("/user/status/:Status").get(Controller.see);
router.route("/user/name/:Name").get(Controller.saw);
router.route("/user/id/:user_id").get(Controller.view);
router.route("/:user_id").put(Controller.update);
router.route("/:user_id").patch(Controller.update);
router.route("/:user_id").delete(Controller.Delete);

module.exports = router;
