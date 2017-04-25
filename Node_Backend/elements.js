var express = require('express');

var router = express.Router();

router.get('/', (req, res, next) => {
	// Return all emenents
});

router.get('/:element', (req, res, next) => {
	// Return specified element
});

module.exports = router;
