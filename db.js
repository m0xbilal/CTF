const mongoose = require("mongoose");
const username = admin;
const password = password;
flag{admin:password}
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://localhost/bags-ecommerce";
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;
