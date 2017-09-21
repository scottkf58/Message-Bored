const express = require('express');
const router = express.Router();
const { Users, Topics, Messages } = require('../../models');


router.get('/users', (req, res) => {
  Users.findAll({ attributes: ['id', 'name'] })
  .then( (users) => {
    return res.json(users);
  });
});


router.post('/users', (req, res) => {
  Users.create({ name: req.body.name })
  .then( (user) => {
    return res.json(user);
  });
});


router.post('/login', (req, res) => {
  return Users.findOne({ where: {name: req.body.name} })
  .then( (user) => {
    if (!user) {
      return res.json('Invalid Login');
    }
    return res.json(user);
  });
});



module.exports = router;