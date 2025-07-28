import Contact from "../model/contact.model.js";

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, Email, and Message are required." });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Contact form submitted successfully.", contact: {
          _id: newContact._id,
          name: newContact.name,
          email: newContact.email,
        }, });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};
