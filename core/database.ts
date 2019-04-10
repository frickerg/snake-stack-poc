import { Config } from 'knex';

export const config: Config = {
	client: 'sqlite3',
	useNullAsDefault: false,
	connection: {
		filename: "../resources/snakedb.sqlite3",
	}
};

export default config;
