const express = require('express');
const router = express.Router();
const { Users, Topics, Messages } = require('../../models');

router.get('/messages/latest', (req, res) => {
  Messages.findAll({
    attributes: ['id', 'body', 'createdAt'],
    include: [
      {model: Topics, attributes: ['id', 'name']},
      {model: Users, attributes: ['name']}
    ]
  })
  .then( (messages) => {
    res.json(messages);
  });
});


router.post('/messages', (req, res) => {
  Messages.create({
    body: req.body.body,
    created_by: req.body.created_by
  })
  .then( (message) => {
    return res.json(message);
  });
});

router.get('/messages/by-topic/:topic_id', (req, res) => {
  let topicId = req.params.topic_id;
  return Messages.findAll({
    where: { topic_id: topicId },
    attributes: ['id', 'body', 'createdAt'],
    include: [
      { model: Users, attributes: ['name'] },
      { model: Topics, attributes: ['id', 'name', 'color'] }
    ],
    order: [['createdAt']]
  })
  .then(result => {
    return res.json(result);
  });
});

module.exports = router;