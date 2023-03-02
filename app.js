const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./api/users/userrouter");
const app = express();
const connection = require("./config/database");

dotenv.config();
// to read all the values of body
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: 1,
    message: "The server is running fine",
  });
});
//sample rotues to varify the endpoints
app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "This is rest apis working",
  });
});

//using the routes defined in router
app.post("/api/users", userRouter);
app.get("/apis", userRouter);

//port location
app.listen(5002 || process.env.APP_PORT, () => {
  console.log("This server is running at localhost :", process.env.APP_PORT);
});
