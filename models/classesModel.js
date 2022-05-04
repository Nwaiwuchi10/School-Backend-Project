import mongoose from "mongoose";

const classesSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Classes = mongoose.model("Classes", classesSchema);

export default Classes;
