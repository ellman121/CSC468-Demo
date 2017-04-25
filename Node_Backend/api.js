var express = require('express');
var elements = require('./elements');

var router = express.Router();

router.use(require('body-parser').json());

router.use("/elements", elements);

module.exports = router;
