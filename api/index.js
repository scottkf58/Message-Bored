const express = require('express');
const router = express.Router();

const userRouter = require('./users');
const topicRouter = require('./topics');
const messageRouter = require('./messages');

router.use('/users', userRouter);
router.use('/topics', topicRouter);
router.use('/messages', messageRouter);

module.exports = router;