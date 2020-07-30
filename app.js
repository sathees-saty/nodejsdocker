const config = require('./config');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to SATY Learning!/nBuild, Run, & Continuously Deploy Docker Containers to Azure App Service');
  
});

app.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});