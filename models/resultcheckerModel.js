import mongoose from "mongoose";

const resultcheckerSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },

    registrationNumber: { type: String, required: true },
    classes: { type: String, required: true },
    term: { type: String, required: true },
    year: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const Resultchecker = mongoose.model("Resultchecker", resultcheckerSchema);

export default Resultchecker;
