import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  email_password: String,
  age: String,
  state: String,
  city: String,
  zip: String,
  company: String,
  web: String,
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, "user-info");
const User = mongoose.model("user-info", userSchema);
export default User;
