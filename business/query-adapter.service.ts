import QueryBuilderService from '../persistence/query-builder.service';

export default class QueryAdapterService {
	private queryBuilder: QueryBuilderService;

	constructor() {
		this.queryBuilder = new QueryBuilderService();
	}

	public triggerTestQuery(): string {
		let result = this.queryBuilder.execTestQuery('TBL_Bookshelf', 3);
		return JSON.stringify(result);
	}

}
