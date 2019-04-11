import QueryBuilderService from '../persistence/query-builder.service';
import BookshelfMapperService from './bookshelf-mapper.service';

export default class QueryAdapterService {
	private queryBuilder: QueryBuilderService;
	private bookshelfMapper: BookshelfMapperService = new BookshelfMapperService();

	constructor() {
		this.queryBuilder = new QueryBuilderService();
	}

	public async triggerTestQuery() {
		let promise = new Promise<Object[]>((resolve, reject) => {
			return resolve(this.queryBuilder.execTestQuery('TBL_Bookshelf', 20))
		});

		let mappedData = this.bookshelfMapper.mapObjectArrayToBookshelfArray(await promise);

		console.log('first descr : ', mappedData[0].Description);
		return mappedData;
	}

}
