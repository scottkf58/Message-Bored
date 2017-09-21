const express = require('express');
const router = express.Router();

const userRouter = require('./users');
const topicRouter = require('./topics');
const messageRouter = require('./messages');

router.use('/', userRouter);
router.use('/', topicRouter);
router.use('/', messageRouter);

module.exports = router;