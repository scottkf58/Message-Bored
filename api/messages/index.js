const express = require('express');
const router = express.Router();
const { Users, Topics, Messages } = require('../../models');

router.get('/', (req, res) => {
  Messages.findAll({
    attributes: ['id', 'body', 'createdAt']
  }).then( (messages) => {
    res.json(messages);
  });
});


router.post('/', (req, res) => {
  Messages.create({
    body: req.body.body,
    created_by: req.body.created_by
  }).then( (message) => {
    return res.json(message);
  });
});

module.exports = router;