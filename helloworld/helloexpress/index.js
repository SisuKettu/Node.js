const express = require('express');

const app = express();

const port = 3000;

app.get("/home/user/:name", (req, res) => {
  res.send("Welcome " + req.params.name);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

app.get("/home/user/:firstname/:age", (req, res) => {
    const age = req.params.age;
    if (age >= 18){
    res.send(`Welcome ${req.params.firstname}, you're ${req.params.age} years old`);
    } else {
        res.send(`Welcome ${req.params.firstname}, you're too young`);
    }
  });
