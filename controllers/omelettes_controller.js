var express = require("express");
var corm = require("./../config/corm.js");
var url = require("url")

var router = express.Router();

router.get("/", function(req, res) {
	corm.selectAll("omelettes", function(result) {
		var hbsObject = {
			omelettes: result
		};
	res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	corm.insertOne("omelettes", req.body["omelette_name"], function(result){
		res.redirect("/")
	});

router.post("/:id", function(req, res) {
	var condtion = "id = " + req.params.id;
	var devoured = "devoured = " + req.body["devoured"]
	corm.updateOne("omelettes", devoured, condition, function(result) {
		res.redirect("/");
	});
});
});

module.exports = router;