import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  private apiUrl = 'http://localhost:3000'; // make sure this matches the port of the backend

  constructor(private http: HttpClient) {}

  searchCities(searchQuery: string): Observable<any[]> {
    const params = new HttpParams().set('search', searchQuery);
    return this.http.get<any[]>(`${this.apiUrl}/cities`, { params });
  }
}
