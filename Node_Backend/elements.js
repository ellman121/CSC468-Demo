var express = require('express');
var fs = require('fs');

var router = express.Router();

// Prebuild things for fetching later

function genSlimElementsArray(array) {
	var slimArray = [];
	array.forEach((value, index) => {
		console.log(value);
		slimArray.push({
			"symbol" : value.symbol,
			"name" : value.name,
			"number": value.number,
			"xpos": value.xpos,
			"ypos": value.ypos
		});
	});
	return slimArray;
}

var elementsArray = JSON.parse(fs.readFileSync('./elements.json'));
var elementsSlim = genSlimElementsArray(elementsArray);

router.get('/', (req, res, next) => {
	res.send(elementsSlim);
});

router.get('/:number', (req, res, next) => {
	var number = req.params.number;

	res.send(elementsArray[number]);
	// return elementsArray[number];
});

module.exports = router;
