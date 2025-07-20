import Burger from "../model/burger.model.js";

export const getburger = async (req, res) => {
  try {
    const burger = await Burger.find();
    res.status(200).json(burger);
  } catch (error) {
    console.log("Error: ", error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};
