import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: "" },
    type: {
      type: String,
      enum: ["prive", "corporate", "sur-mesure", "autre"],
      default: "autre",
    },
    date: { type: Date },
    guests: { type: Number, default: null },
    message: { type: String, required: true, trim: true },
    budget: { type: String, trim: true, default: "" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);
