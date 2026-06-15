const express = require("express");
const cors = require("cors");

const routes = require("./routes/profileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ADD THIS HOME ROUTE
app.get("/", (req, res) => {
  res.json({
    message: "GitHub Profile Analyzer API is running 🚀",
    routes: {
      analyze: "/api/analyze/:username",
      getAll: "/api/profiles",
      getById: "/api/profiles/:id"
    }
  });
});

// existing routes
app.use("/api", routes);

module.exports = app;