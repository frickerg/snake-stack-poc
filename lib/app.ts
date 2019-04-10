import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import routes from '../api';

class App {

	constructor() {
		this.app = express();
		this.config();
		routes(this.app);
	}

	public app: Application;

	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
	}
}

export default new App().app;
