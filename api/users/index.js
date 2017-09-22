const express = require('express');
const router = express.Router();
const { Users, Topics, Messages } = require('../../models');


router.get('/users', (req, res) => {
  Users.findAll({ attributes: ['id', 'name'] })
  .then( (users) => {
    return res.json(users);
  });
});

router.get('/users/:id', (req, res) => {
  let userId = req.params.id;
  return Users.findById(userId, {
    attributes: ['id', 'name'],
    include: [
      {
        model: Messages,
        attributes: ['body', 'createdAt'],
        include: [
          {
            model: Topics,
            attributes: ['name', 'id']
          }
        ]
      }
    ]
  })
  .then( (result) => {
    res.json(result);
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