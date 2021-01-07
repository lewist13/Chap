const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const AppRouter = require("./routes/AppRouter");

const path = require("path");

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", AppRouter);
app.get("/", (req, res) => res.json({ message: "did i do it" }));
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
