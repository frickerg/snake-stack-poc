import knex from '../core/knex';

export default class QueryBuilderService {

	public execTestQuery(tblName: string, limit: number) {
		knex.select('*').from(tblName).limit(limit).debug(true).then(rows => {
			console.log('\ntesting query:');
			return rows;
		})
	}

}
