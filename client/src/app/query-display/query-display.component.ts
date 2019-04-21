import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Bookshelf from '../../../../core/models/bookshelf';

@Component({
	selector: 'app-query-display',
	templateUrl: './query-display.component.html',
	styleUrls: ['./query-display.component.sass']
})
export class QueryDisplayComponent implements OnInit {
	bookshelves: Bookshelf[] = [];

	constructor(private apiService: ApiService) {
		this.apiService.retrieveExampleData().subscribe(data => {
			data.forEach(element => {
				this.bookshelves.push(element);
			});
		});
	}

	ngOnInit() {
	}

}
