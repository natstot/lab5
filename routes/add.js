var data = require("../data.json");

exports.addFriend = function(req, res) {    
	res.render('add', data);
	var newName = req.query.name;
	var newDescription = req.query.description;
	var newImage = "http://lorempixel.com/400/400/people";
	var newFriend = {
		"name": newName,
		"description": newDescription,
		"imageURL": newImage
	};
	console.log(newFriend);
	data["friends"].push(newFriend);
 }