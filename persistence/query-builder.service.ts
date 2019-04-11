var connection = require('../core/knex');

export default class QueryBuilderService {

	public execTestQuery(tblName: string, limit: number): Promise<Object[]> {
		var result = [];
		return connection.select('*').from(tblName).limit(limit).then(rows => {
			rows.forEach((row) => {
				result.push(row);
			});
			return result;
		});
	}
}
