import connectToDatabase from "../../../lib/mongodb";
import User from "../../../models/user";

export default async function handler(req, res) {
  await connectToDatabase();
  const { method } = req;

  // console.log(`method,req.body`, method, req.body);

  if (method === "POST") {
    try {
      const user = new User(req.body); /* create a new model in the database */
      await user.save();
      console.log(`userdata`, user);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      console.log(`error`, error);
      res.status(400).json({ success: false, error: error });
    }
  }
}
