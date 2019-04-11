import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

import routes from '../api';

class App {
	constructor() {
		this.app = express();
		this.config();
		routes(this.app);
	}

	public app: Application;

	private config(): void {
		// view engine setup
		this.app.set('view engine', 'ejs');
		this.app.set('views', path.join(__dirname, '../', 'api', 'views'));
		this.app.use(express.static(path.join(__dirname, '../', 'api', 'views', 'assets')));

		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}
}

export default new App().app;
