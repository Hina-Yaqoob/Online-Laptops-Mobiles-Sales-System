import mongoose from "mongoose";

// PROCUCT MODAL
const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

export const categoryModel = mongoose.model("Category", categorySchema);
export default categoryModel;
