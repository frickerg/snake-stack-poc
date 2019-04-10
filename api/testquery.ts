import * as express from 'express';
import { Router, Response, Request } from 'express';
import QueryAdapterService from '../business/query-adapter.service'

const queryAdapter: QueryAdapterService = new QueryAdapterService();

class TestQueryRouter {
	public router: Router;

	constructor() {
		this.router = express.Router();
		this.routes();
	}

	public routes() {
		this.router.get('/', function (req: Request, res: Response) {
			res.send(queryAdapter.triggerTestQuery());
		});
	}
}

const testQueryRouter = new TestQueryRouter();
testQueryRouter.routes();

const router = testQueryRouter.router;

export default router;
