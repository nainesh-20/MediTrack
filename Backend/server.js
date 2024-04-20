const express = require("express");
const { main } = require("./models/index");
const productRoute = require("./router/product");
const cors = require("cors");
const User = require("./models/users");
const Product = require("./models/Product");
const medicalSuppliesRouter = require('./router/supplies');

const app = express();
const PORT = 4012;
main();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running123");
});


// Products API
app.use("/api/product", productRoute);

// Use the medicalSuppliesRouter
app.use('/api/supplies', medicalSuppliesRouter);

// Login API
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All necessary fields have not been filled to sign in.",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }

    if (password === user.password) {
      // Direct comparison (unsafe for production)

      res.status(200).json(user);

      console.log("User Authenticated ", user);
    } else {
      res.status(401).json({ message: "Invalid credentials." });
    }
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ message: "An error occurred while processing your request." });
  }
});

// ------------------------------------

// Registration API
app.post("/api/register", (req, res) => {
  let registerUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    hospitalname: req.body.hospitalname,
    addressone: req.body.addressone,
    addresstwo: req.body.addresstwo,
    city: req.body.city,
    country: req.body.country,
    pincode: req.body.pincode,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    password: req.body.password,
  });

  registerUser
    .save()
    .then((result) => {
      res.status(200).send(result);
      alert("Signup Successfull");
    })
    .catch((err) => console.log("Signup: ", err));
  console.log("request: ", req.body);
});

app.get("/testget", async (req, res) => {
  const result = await Product.findOne({ _id: "6429979b2e5434138eda1564" });
  res.json(result);
});

// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again");
});
