import connectToDatabase from "../../../lib/mongodb";

import User from "../../../models/user";

export default async (req, res) => {
  await connectToDatabase();

  const user = await User.find();

  // const comments = await

  //   .collection("comments")

  //   .find({})

  //   .sort({ metacritic: -1 })

  //   .limit(20)

  //   .toArray();

  // res.json(comments);
  res.json(user);
};
