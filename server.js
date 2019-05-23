const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT), function () {
    console.log('server listening on: http://localhost:' + PORT);
};

