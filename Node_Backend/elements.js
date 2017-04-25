var express = require('express');
var fs = require('fs');

var router = express.Router();

// Prebuild things for fetching later

function genSmallElementsArray(array) {
	var slimArray = [];
	array.forEach((index, value) => {
		slimArray.push({
			"symbol" : value.symbol,
			"name" : value.name
		});
	});
	return slimArray;
}

var contents = fs.readFileSync('./elements.json')
var elementsArray = JSON.parse(contents);
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
