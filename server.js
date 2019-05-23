const bodyParser = require('body-parser')

const express = require("express");
const app = express();
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

