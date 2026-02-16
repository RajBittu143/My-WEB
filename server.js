const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// View engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => res.render("home"));
app.get("/services", (req, res) => res.render("services"));
app.get("/portfolio", (req, res) => res.render("portfolio"));
app.get("/order", (req, res) => res.render("order"));
app.get("/contact", (req, res) => res.render("contact"));

// Form handlers
app.post("/order", (req, res) => {
  const { name, phone, email, message } = req.body;

  // Basic validation
  if (!name || !phone || !email) {
    return res.status(400).send("All required fields are missing!");
  }

  console.log("📦 New Order Received:");
  console.log({ name, phone, email, message });

  // Render success page
  res.render("order-success", {
    name,
  });
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});