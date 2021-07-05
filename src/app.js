const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("On a website.");
});