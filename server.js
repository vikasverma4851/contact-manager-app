const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const app = express();

const port = process.env.PORT || 5000;

connectDb();
app.use(express.json()); // middleware function that parses incoming JSON payloads and makes the data available in the req.body property of your request object.

app.use(errorHandler);

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
