const connect = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("MongoDB connected");
  } catch (err) {
      console.error("MongoDB connection error:", err);
      throw err; // Throw the error to propagate it
  }
};