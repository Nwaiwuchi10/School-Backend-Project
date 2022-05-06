import mongoose from "mongoose";
const jss1result3rdtermSchema = mongoose.Schema(
  {
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

    registrationNumber: {
      type: String,
      required: true,
    },

    mathematics: {
      type: Number,
      required: true,
      default: 0,
    },
    english: {
      type: Number,
      required: true,
      default: 0,
    },
    healthScience: {
      type: Number,
      required: true,
      default: 0,
    },
    igboLanguage: {
      type: Number,
      required: true,
      default: 0,
    },
    CRK: {
      type: Number,
      required: true,
      default: 0,
    },
    TotalScore: {
      type: Number,
      required: true,
      default: 0,
    },
    TotalAverage: {
      type: String,
      required: true,
    },
    Position: {
      type: String,
      required: true,
    },
    basicScience: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Jss1result3rdterm = mongoose.model(
  "Jss1result3rdterm",
  jss1result3rdtermSchema
);

export default Jss1result3rdterm;
