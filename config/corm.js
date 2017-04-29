//i like corm . . .
//i like connection.js too . . . s
var connection = require("./connection.js")

//let's make corm . . .

var corm = {
	selectAll: function(tableName, cb) {
		connection.query("SELECT * FROM " + tableName, function(err, result) {
			if (err) {
				throw err
			};
			cb(result);
		});
	},
	insertOne: function(tableName, omName, cb) {
		connection.query("INSERT INTO " + tableName + " (omelette_name, devoured) VALUES (? , false)", [omName], 
		function(err, result) {
			if (err) {
				throw err
			};
			cb(result);
		});
	},
	updateOne: function(tableName, devoured, id, cb) {
		connection.query("UPDATE " + tableName + " SET devoured = ? WHERE id = ?", [devoured, id],
		function(err, result) {
			if (err) {
				throw err;
			};
			cb(result);
		});
	}
};

module.exports = corm;