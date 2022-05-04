import mongoose from "mongoose";

const resultcategorySchema = mongoose.Schema(
  {
    classes: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },
    term: {
      type: String,
      required: true,
    },
    registrationNumber: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Resultcategory = mongoose.model("Resultcategory", resultcategorySchema);

export default Resultcategory;
