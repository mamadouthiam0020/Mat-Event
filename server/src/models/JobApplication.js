import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: "" },
    position: { type: String, trim: true, default: "" },
    message: { type: String, trim: true, default: "" },
    cvUrl: { type: String, default: "" },
    cvName: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("JobApplication", jobApplicationSchema);
