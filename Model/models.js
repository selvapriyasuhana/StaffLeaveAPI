

var mongoose = require("mongoose");

var Schema = mongoose.Schema({
  id: {
    type: Number,
  },
  Name: {
    type: String,
  },
  Leavetype: {
    type: String,
  },

  StartDate: {
    required: false,
    type: Date,
  },
  EndDate: {
    required: false,
    type: Date,
  },
  Reason: {
    type: String,
    required: false,
  },
  Command: {
    type: String,
    required: false,
  },
  Status: {
    type: [
      {
        required: true,
        type: String,
        enum: ["pending", "accepted", "rejected"],
      },
    ],
    default: ["pending"],
  },
});
Schema.path("StartDate").validate(async function (StartDate) {
  const existingRequest = await mongoose.models.user.findOne({
    StartDate,
    Name: this.Name,
  });

  if (existingRequest) {
    return false;
  }

  return true;
});


var staff_Leaverequest = mongoose.model("user", Schema);

staff_Leaverequest.findByStatus = async function (Status) {
  try {
    return await this.find({ Status }).exec();
  } catch (error) {
    throw error;
  }
};

staff_Leaverequest.findByName = async function (Name) {
  try {
    return await this.find({ Name }).exec();
  } catch (error) {
    throw error;
  }
};

module.exports = staff_Leaverequest;
