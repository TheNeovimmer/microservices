const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sequelize = require("./config/db");
const User = require("./models/User");

const app = express();
app.use(express.json());

// Connect MySQL
sequelize.sync().then(() => {
  console.log("MySQL connected");
});

// Register
app.post("users/register", async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ email, password: hashed });
    res.json({ message: "User registered", userId: user.id });
  } catch (err) {
    res.status(400).json({ error: "Email already exists" });
  }
});

// Login
app.post("users/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user)
    return res.status(404).json({ error: "User not found" });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid)
    return res.status(401).json({ error: "Wrong password" });
  const token = jwt.sign({ id: user.id }, "secret");
  res.json({ token });
});

app.listen(4001, () =>
  console.log("User service running on port 4001")
);
