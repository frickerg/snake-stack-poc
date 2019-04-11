import QueryBuilderService from '../persistence/query-builder.service';

interface Bookshelf {
	"CatType": number;
	"CatID": number;
	"ItemID": string;
	"Description": string;
	"Balance": number | null;
	"Position": number | null;
	"PositionTotal": number | null;
}

export default class QueryAdapterService {
	private queryBuilder: QueryBuilderService;

	constructor() {
		this.queryBuilder = new QueryBuilderService();
	}

	public async triggerTestQuery() {
		let promise = new Promise<Object[]>((resolve, reject) => {
			return resolve(this.queryBuilder.execTestQuery('TBL_Bookshelf', 20))
		});

		let result = await promise;

		//TODO: following code  should be performed in its own mapper class!
		let mappedData: Bookshelf[] = [];

		result.forEach(element => {
			mappedData.push(element as Bookshelf);
		});

		//XXX: gets logged twice somehow, also happens before calling the endpoint! (?)
		// Needs less calls since everything is read at the beginning, but is that optimal at runtime?
		console.log('first descr : ', mappedData[0].Description);
		return mappedData;
	}

}
