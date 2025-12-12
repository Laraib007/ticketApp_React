require("dotenv").config();
const connectToMongoose = require("./db");
const express = require('express')
const cors = require('cors');

connectToMongoose()


const app = express()
const port = "5000"
app.use(cors()); // <-- REQUIRED
app.use(express.json());

app.use(express.json());  // <- IMPORTANT
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/ticket", require("./routes/ticket"))

app.get('/', (req, res) => {
  res.send('Hello Labi!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})