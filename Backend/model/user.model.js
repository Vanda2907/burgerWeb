//in model folder
//define schema of user
import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true,
    },
});
const User = mongoose.model("User", userSchema)
export default User;