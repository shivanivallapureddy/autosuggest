const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// To tell app where to find the static files - html, css, js
app.use(express.static("frontend"));

app.listen(port, function () {
    console.log("App running on http://localhost:" + port);
});