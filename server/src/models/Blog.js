import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, default: "" },
    category: {
      type: String,
      enum: ["conseils", "tendances", "coulisses", "evenement"],
      default: "evenement",
    },
    cover: { type: String, default: "" },
    body: { type: String, default: "" },
    author: { type: String, default: "MAT'EVENT" },
    date: { type: Date, default: Date.now },
    published: { type: Boolean, default: true },
    seoTitle: { type: String, default: "" },
    seoDescription: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Blog", blogSchema);
