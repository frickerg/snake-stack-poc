const table_names = ['TBL_Bookshelf', 'TBL_Inventory'];

const knex = require('knex')({
	client: 'sqlite3',
	useNullAsDefault: false,
	connection: {
		filename: "./resources/snakedb.sqlite3",
	}
});

// display column names
table_names.forEach(tableName => {
	knex(tableName).columnInfo().then(columns => {
		console.log(columns);
	});
});

// testing query
knex.select('*').from('TBL_Bookshelf').limit(3).debug().then(rows => {
	console.log('\ntesting query:');
	rows.forEach((row) => {
		console.log(row.ItemID);
	});
	knex.destroy();
});
