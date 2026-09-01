import mongoose from "mongoose";

const jobOfferSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    type: { type: String, trim: true, default: "" },
    description: { type: String, trim: true, default: "" },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("JobOffer", jobOfferSchema);
