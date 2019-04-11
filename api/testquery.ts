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
		this.router.route('/').get(async function (req: Request, res: Response) {
			let promise = new Promise((resolve, reject) => {
				resolve(queryAdapter.triggerTestQuery())
			});
			res.send(await promise);
		});
	}
}

const testQueryRouter = new TestQueryRouter();
testQueryRouter.routes();

const router = testQueryRouter.router;

export default router;
