const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./databases/db");
const router = require("./routes/blog-routes");


const app = express();

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
app.use(express.static("upload/images"));

app.use("/api/bloggy", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server up and running on Port ${PORT}`));
