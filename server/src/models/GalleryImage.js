import mongoose from "mongoose";

const galleryImageSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, default: "" },
    category: {
      type: String,
      enum: ["mariage", "corporate", "conference", "soiree", "decoration"],
      default: "soiree",
    },
    url: { type: String, required: true },
    thumb: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    sort: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("GalleryImage", galleryImageSchema);
