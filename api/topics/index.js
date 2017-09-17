const express = require('express');
const router = express.Router();
const { Users, Topics, Messages } = require('../../models');

router.get('/', (req, res) => {
  return Topics.findAll({
    attributes: ['id', 'name', 'createdAt']
  }).then(topics => {
    res.json(topics);
  });
});


router.post('/', (req, res) => {
  return Topics.create({
    name: req.body.name,
    created_by: req.body.created_by
  }).then(topic => {
    return res.json(topic);
  });
});

module.exports = router;
