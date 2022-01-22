const mongoose = require('mongoose');

const requestSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    phoneNo: String,
    city: String,
    clothes: Boolean,
    medicine: Boolean,
    volunteer: Boolean,
    accommodation: Boolean,
    availabilityOrder: {
      type: Number,
      min: 0,
      max: 3
    }
  },
  { timestamps: true }
);

const requestModel = mongoose.model('RequestModel', requestSchema);

module.exports = requestModel;
