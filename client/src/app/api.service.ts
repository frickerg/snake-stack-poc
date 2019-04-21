import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Bookshelf from '../../../core/models/bookshelf';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	private apiUrl: string;

	constructor(private http: HttpClient) {
		this.apiUrl = 'http://localhost:3001/api/v1';
	}

	retrieveExampleData(): Observable<Bookshelf[]> {
		return this.http.get<Bookshelf[]>(`${this.apiUrl}/testquery`);
	}
}
