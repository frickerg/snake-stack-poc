import QueryBuilderService from '../persistence/query-builder.service';

export default class QueryAdapterService {
	private queryBuilder: QueryBuilderService;

	constructor() {
		this.queryBuilder = new QueryBuilderService();
	}

	public async triggerTestQuery() {
		return this.queryBuilder.execTestQuery('TBL_Bookshelf', 3);
	}

}
