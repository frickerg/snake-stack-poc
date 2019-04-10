import * as express from 'express';
import { Application, Router, Response, Request } from 'express';
import TestQueryRouter from './testquery';

export default function Routes(app: Application) {
	const router: Router = express.Router();

	app.use('/', router);
	app.use('/index', (req: Request, res: Response) => {
		res.status(200).json({
			message: 'Snake Stack POC'
		});
	});
	app.use('/api/testquery', TestQueryRouter);
}
