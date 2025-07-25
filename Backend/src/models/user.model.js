import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  phoneNo: {
    type: String,
    required: [true, "Phone number is required"]
  },
  role: {
    type: String,
    enum: ['customer', 'serviceProvider'],
    default: 'customer'
  },
  serviceType: {
    type: String,
    default: null // only used if role is serviceProvider
  },
  refreshToken: {
    type: String
  }
}, { timestamps: true });


// ✅ Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// ✅ Password comparison method
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// ✅ JWT Tokens
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { _id: this._id, name:this.name , email: this.email,phoneNo:this.phoneNo, role: this.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
     },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

userSchema.plugin(mongooseAggregatePaginate);

export const User = mongoose.model("User", userSchema);
