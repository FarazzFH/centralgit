const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    fs.writeFileSync("/data/info.txt", "Backend was called\n", { flag: "a" });
    res.send("Hello from Backend App");
});

app.listen(5000, "0.0.0.0", () => {
    console.log("Backend running on port 5000");
});
