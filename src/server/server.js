const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//  that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/runBenchmark', (req, res) => {
  res.send([]);
});