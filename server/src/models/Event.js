import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ["mariage", "corporate", "conference", "soiree", "sur-mesure"],
      required: true,
    },
    description: { type: String, trim: true, default: "" },
    location: { type: String, trim: true, default: "" },
    date: { type: Date },
    image: { type: String, default: "" },
    featured: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Event", eventSchema);
