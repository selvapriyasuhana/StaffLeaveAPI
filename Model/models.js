var mongoose = require("mongoose");

var Schema = mongoose.Schema({
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
    required: true,
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
  const existingRequest = await mongoose.models.list2.findOne({
    StartDate,
    Name: this.Name,
  });

  if (existingRequest) {
    return false; // Validation fails if an existing request is found
  }

  return true; // Validation passes if no existing request is found
}, "Leave request already exists for this date");

var staff_Leaverequest = (module.exports = mongoose.model("list2", Schema));
module.exports.get = function (limit) {
  return staff_Leaverequest.find().limit(limit).exec();
};