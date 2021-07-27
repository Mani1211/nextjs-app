import { ObjectID } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";
const getSingleMovie = async (req, res) => {
  const { movieId } = req.query;
  console.log(`movieId`, movieId);
  const { db } = await connectToDatabase();

  const comments = await db

    .collection("comments")

    .findOne({ _id: ObjectID(movieId) });

  res.json(comments);

  //   res.json({ message: "red" });
};

export default getSingleMovie;
