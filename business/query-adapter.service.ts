import QueryBuilderService from '../persistence/query-builder.service';

export default class QueryAdapterService {
	private _queryBuilder: QueryBuilderService;

	constructor() {
		this._queryBuilder = new QueryBuilderService();
	}

	public triggerTestQuery(): string {
		return JSON.stringify(this._queryBuilder.execTestQuery('TBL_Bookshelf', 3));
	}

}
