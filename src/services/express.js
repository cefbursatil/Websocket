const express = require("express");

const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Http server listening through port ${server.address().port}`);
  });

server.on("error", (error) => console.log(`Server error: ${error}`));

exports.server = server;
exports.app = app;