import * as express from 'express';
import { Router, Response, Request } from 'express';
import QueryAdapterService from '../business/query-adapter.service'

const queryAdapter: QueryAdapterService = new QueryAdapterService();

class TestQueryRouter {
	public router: Router;

	constructor() {
		this.router = express.Router();
	}

	public async routes() {
		this.router.route('/testquery').get(async function (req: Request, res: Response) {
			let promise = new Promise((resolve, reject) => {
				resolve(queryAdapter.triggerTestQuery())
			});
			res.render('response', {
				title: req.route.name,
				request: req.route.path,
				status: res.statusCode,
				response: JSON.stringify(await promise)
			});
		});
	}
}

const testQueryRouter = new TestQueryRouter();
testQueryRouter.routes();

export default testQueryRouter.router;
