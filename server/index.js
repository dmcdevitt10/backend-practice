// import statements
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;
const app = express();


// Middleware
app.use(express.json());
app.use(cors());

// Endpoints


// Listen
app.listen(PORT, () => console.log(`Up on port ${PORT}`));
