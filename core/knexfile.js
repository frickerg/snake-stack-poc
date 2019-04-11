module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: false,
		connection: {
			filename: './resources/snakedb.sqlite3'
		}
	},
	migrations: {
		directory: __dirname + '/knex/migrations',
	},
	seeds: {
		directory: __dirname + '/knex/seeds'
	}
};
