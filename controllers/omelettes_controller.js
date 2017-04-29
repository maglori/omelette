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

router.put(":id", function(req, res) {
	console.log(req.params.id);
	corm.updateOne("omelettes", req.body.devoured, req.params.id, function(result) {
		res.redirect("/");
	});
});

});

module.exports = router;