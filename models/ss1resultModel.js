import mongoose from "mongoose";

const remarkSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    grade: { type: String, required: true },
    comment: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const ss1resultSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
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
    option: {
      type: String,
      required: true,
    },
    registrationNumber: {
      type: String,
      required: true,
    },
    remark: [remarkSchema],
    mathematics: {
      type: String,
      required: true,
    },
    english: {
      type: String,
      required: true,
    },
    Biology: {
      type: String,
      required: true,
    },
    igboLanguage: {
      type: String,
      required: true,
    },
    CRK: {
      type: String,
      required: true,
    },
    Government: {
      type: String,
      required: true,
    },
    Economics: {
      type: String,
      required: true,
    },
    Physics: {
      type: String,
      required: true,
    },
    Chemistry: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ss1result = mongoose.model("Ss1result", ss1resultSchema);

export default Ss1result;
