const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());




const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));