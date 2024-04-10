const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const app = express();

dotenv.config();

app.use(express.json());

const userRoutes = require("./Routes/userRoutes");
const equipRoutes = require("../backend/routes/equiRoutes");
// const chatRoutes = require("./Routes/chatRoutes");
// const messageRoutes = require("./Routes/messageRoutes");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Server is Connected to Database");
  } catch (err) {
    console.log("Server is NOT connected to Database", err.message);
  }
};
connectDb();

app.get("/", (req, res) => {
  res.send("API is running123");
});

app.use("/user", userRoutes);
app.use("/equipentry", equipRoutes);

// app.use("/chat", chatRoutes);
// app.use("/message", messageRoutes);

// Error Handling middlewares


const PORT = process.env.PORT;
app.listen(PORT, console.log("Server is Running..."));