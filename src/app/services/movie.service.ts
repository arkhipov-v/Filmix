import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_URL: string = 'https://www.omdbapi.com/?';
  private API_KEY: string = '&apikey=f94b6ffa';

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any> {
    return this.http.get(`${this.API_URL}&s=game${this.API_KEY}`);
  }

  getForName(searchStr: string): Observable<any> {
    return this.http.get(`${this.API_URL}&s=${searchStr}${this.API_KEY}`);
  }

  getMovie(id: any) {
    return this.http.get<any>(`${this.API_URL}&i=${id}${this.API_KEY}`);
  }
}
