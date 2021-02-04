const express = require('express');
const app = express();
const PORT = 5000;
//P1GmQc1ecan7TjPF

const customMiddleware = (req, res, next) => {
    console.log("middleware is executing!");
    next();
}

app.get('/', (req, res) => {
    console.log("home");
    res.send("hello world!");
})

app.get('/about',customMiddleware, (req, res) => {
    console.log("about");
    res.send("this is the about page!");
})

app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
})