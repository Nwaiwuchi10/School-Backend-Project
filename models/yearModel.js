import mongoose from "mongoose";

const yearSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Year = mongoose.model("Year", yearSchema);

export default Year;
