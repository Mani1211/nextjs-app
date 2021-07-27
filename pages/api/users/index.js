import connectToDatabase from "../../../lib/mongodb";
import User from "../../../models/user";

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();
  try {
    //   const u = new User({
    //     name: "vicky",
    //     email: "email",
    //   });

    const user = await User.create({
      name: "vicky",
      email: "email",
    }); /* create a new model in the database */
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
