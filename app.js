const sqlite3 = require('sqlite3').verbose();
const table_names = ['TBL_Bookshelf', 'TBL_Inventory'];

// open snakedb
let db = new sqlite3.Database('./resources/snakedb.sqlite3', sqlite3.OPEN_READONLY, (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('connection to snakedb successful');
});

// serialize snakedb tables
db.serialize(() => {
	table_names.forEach(tbl => {
		console.log(tbl);
		db.each('PRAGMA table_info(' + tbl + ')', (err, col) => {
			if (err) {
				console.error(err.message);
			}
			console.log(col);
		});
	})
});

// close the connection
db.close((err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connection closed');
});
