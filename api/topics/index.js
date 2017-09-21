const express = require('express');
const router = express.Router();
const { Users, Topics, Messages } = require('../../models');

router.get('/topics', (req, res) => {
  return Topics.findAll({
    attributes: ['id', 'name', 'createdAt'],
    include: [{ model: Users, attributes: ['name'] }]
  }).then(topics => {
    res.json(topics);
  });
});


router.post('/topics', (req, res) => {
  return Topics.create({
    name: req.body.name,
    created_by: req.body.created_by
  }).then(topic => {
    return res.json(topic);
  });
});

module.exports = router;
