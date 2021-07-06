const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mainRoute = require("./routes/mainRoutes");
const findUserRoute = require("./routes/findUserRoute");

app.use('/', mainRoute);
app.use('/stats', findUserRoute);
app.use('/stats/:username', findUserRoute)

app.listen(process.env.PORT, () => {
    console.log("On a website.");
});