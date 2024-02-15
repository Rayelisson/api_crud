import mongoose from "mongoose";

const connectcDatabase = () => {
  console.log("What connecting to the database");

  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log(error));
};

export default connectcDatabase;
