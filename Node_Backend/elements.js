var express = require('express');
var fs = require('fs');

var router = express.Router();

// Prebuild things for fetching later

function genSlimElementsArray(array) {
	var slimArray = [];
	array.forEach((value, index) => {
		slimArray.push({
			"symbol" : value.symbol,
			"name" : value.name,
			"number": value.number,
			"xpos": value.xpos,
			"ypos": value.ypos,
			"phase": value.phase
		});
	});
	return slimArray;
}

var elementsArray = JSON.parse(fs.readFileSync('./elements.json'));
var elementsSlim = genSlimElementsArray(elementsArray);

router.get('/', (req, res, next) => {
	res.json(elementsSlim);
});

router.get('/:number', (req, res, next) => {
	var number = req.params.number;

	res.json(elementsArray[number-1]);
	// return elementsArray[number];
});

module.exports = router;
