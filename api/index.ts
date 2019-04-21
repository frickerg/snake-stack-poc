import * as express from 'express';
import { Application, Router, Response, Request, NextFunction } from 'express';
import TestQueryRouter from './testquery';

class Error {
	public message: string;
	public status: number;

	constructor(message: string) {
		this.message = message;
	}
}

export default function Routes(app: Application) {
	const router: Router = express.Router();

	// setup api endpoints
	app.use('/', router);
	app.use('/api/v1/testquery', TestQueryRouter);

	// setup api index page
	app.use(['/$', '/api/v1$'],
		function (req: Request, res: Response) {
			res.render('index', {
				title: 'Snake Stack POC',
			});
		}
	);

	// catch 404 and forward to error handler
	app.use('/', function (req: Request, res: Response, next: NextFunction) {
		var err = new Error('Not Found');
		err.status = 404;
		console.log(err);
		next(err);
	});

	// error handler
	app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};

		// render the error page
		res.status(err.status || 500);
		res.render('error');
	});
}
