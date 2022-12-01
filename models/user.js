import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String },
  profile: { type: String },
  password: { type: String, required: true },
  id: { type: String },
});
export default mongoose.model("User", userSchema);
