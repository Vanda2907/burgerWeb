//define function
import User from "../model/user.model.js";
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing

export const signup = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 8); // Hash the password
    const hashConfirmPassword = await bcrypt.hash(confirmPassword, 8); // Hash the confirm password
    const createUser = new User({
      username: username,
      email: email,
      password: hashPassword,
      confirmPassword: hashConfirmPassword,
    });
    await createUser.save();
    res
      .status(201)
      .json({
        message: "User created successfully",
        user: {
          _id: createUser._id,
          username: createUser.username,
          email: createUser.email,
        },
      });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal server error " });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    console.log("Error:" + error.message);
    res.status(500).json({ message: "Internal server error " });
  }
};
