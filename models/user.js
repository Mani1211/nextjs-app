import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: { currentTime: () => Date.now() } }
);

// module.exports = mongoose.model("User", User);
export default mongoose.models.User || mongoose.model("User", User);
