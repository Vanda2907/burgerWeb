import mongoose from "mongoose";

const burgerSchema=mongoose.Schema({
    id:Number,
    name:String,
    category:String,
    ingredients:String,
    price:String,
    image:String,
    type:String
});
 
const Burger=mongoose.model("Burger", burgerSchema);

export default Burger;