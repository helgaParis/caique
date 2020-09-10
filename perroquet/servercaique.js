const express = require('express');
const path = require('path');
const app = express();
const PORT = 8003;

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// start express server on port 5000
app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});