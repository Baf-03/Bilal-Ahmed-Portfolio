import connectToDatabase from "./Db";

export default async function handler(req, res) {
  try {
    await connectToDatabase(); // Establish MongoDB connection

    // Perform MongoDB operations here
    const data = await MyModel.find({});
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}