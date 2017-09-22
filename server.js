const path = require('path');
const express = require('express');
const session = require('express-session');
const sequelize = require('sequelize');
const bp = require('body-parser');
const methodOverride = require('method-override');

const app = express();

const db = require('./models');
const { Users, Topics, Messages } = require('./models');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bp.json());
app.use('/api', require('./api/index.js'));

app.get('*', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  db.sequelize.sync();
  // db.sequelize.sync({force:true});
  console.log(`Server running on ${PORT}`);
});