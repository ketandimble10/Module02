
import express from "express";
import fs from "fs";

const app = express();

const PORT = process.env.PORT || 3000
  
// Get
app.get('/', (req, res) => {
  res.send("<h1>Welcome to Movies Page</h1>")
})

app.get("/movielist", (req, res) => {
    fs.readFile("./index.json", (err, data) => {
      if (err) {
        res.status(500).send("Internal Server Error.");
        return false;
      }
      res.setHeader("content-type", "application/json");
      res.send(data);
    });
  });
  
app.listen(PORT,(err1)=>{
    if (err1) console.log(err1);
    console.log("Server listening on PORT", PORT);
}); 