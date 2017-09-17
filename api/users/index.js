const express = require('express');
const router = express.Router();
const { Users, Topics, Messages } = require('../../models');


router.get('/', (req, res) => {
  Users.findAll({ attributes: ['id', 'name'] })
  .then( (users) => {
    return res.json(users);
  });
});


router.post('/', (req, res) => {
  Users.create({ name: req.body.name })
  .then( (user) => {
    return res.json(user);
  });
});



module.exports = router;