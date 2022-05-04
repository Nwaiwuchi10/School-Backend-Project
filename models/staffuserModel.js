import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const staffuserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    classes: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    subject: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    formTeacher: {
      type: Boolean,
      required: true,
      default: false,
    },
    roles: { type: String, required: true, default: "Teacher" },

    password: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

staffuserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
staffuserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Staffuser = mongoose.model("Staffuser", staffuserSchema);

export default Staffuser;
