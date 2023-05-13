const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const userDetailsSchema = mongoose.Schema({
  userEmail: { type: String, required: true },
  password: { type: String, required: true },
});
userDetailsSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};
const Users = mongoose.model("UserDetails", userDetailsSchema, "UserDetails");
const validate = (data) => {
  const schema = joi.object({
    userEmail: joi.string().email().required().label("userEmail"),
    password: passwordComplexity().required().label("password"),
  });
  return schema.validate(data);
};
module.exports = { Users, validate };
