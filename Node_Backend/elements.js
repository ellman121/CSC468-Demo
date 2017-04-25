var express = require('express');
var fs = require('fs');

var router = express.Router();

// Prebuild things for fetching later

function genSmallElementsArray(array) {
	var slimArray = [];
	for (elem in array) {
		slimArray.push({
			"symbol" : elem.symbol,
			"name" : elem.name
		})
	}
}

var elementsArray = JSON.parse(fs.readFileSync('./elements.json'));
var elementsSlim = genSmallElementsArray(elementsArray);

router.get('/', (req, res, next) => {
	res.send(elementsSlim);
});

router.get('/:number', (req, res, next) => {
	var number = req.params.number;

	res.send(elementsArray[number]);
	// return elementsArray[number];
});

module.exports = router;
