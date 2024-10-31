require('dotenv').config();
const express = require('express');
const app = express();
const todoroutes = require('./routes/todo.js');
const tododbroutes = require('./routes/tododb.js');
const port = process.env.PORT || 6000;
 
app.use(express.json());

app.use('/todos',tododbroutes);
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`); 
});