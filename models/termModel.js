import mongoose from "mongoose";

const termSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Term = mongoose.model("Term", termSchema);

export default Term;
