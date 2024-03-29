import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_URL: string = 'https://www.omdbapi.com/?';
  private API_KEY: string = '&apikey=f94b6ffa';

  constructor(private http: HttpClient) {}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error('My Error', error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getMovies(searchStr?: string, page?: number): Observable<any> {
    return this.http
      .get(`${this.API_URL}&s=${searchStr}&page=${page}${this.API_KEY}`)
      .pipe(catchError(this.handleError<any>('getAllMovies', [])));
  }

  getMovieForId(id: string) {
    return this.http
      .get<any>(`${this.API_URL}&i=${id}${this.API_KEY}`)
      .pipe(catchError(this.handleError<any>('getMovie', [])));
  }
}
