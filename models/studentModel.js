import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    classes: {
      type: String,
      required: true,
    },

    registrationNumber: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
