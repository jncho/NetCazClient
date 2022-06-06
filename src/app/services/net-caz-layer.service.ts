import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Song } from './dto/Song';


@Injectable({
  providedIn: 'root'
})
export class NetCazLayerService {

  endpoint = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getSongs(queryStr: string): Observable<any> {
    return this.http.post(this.endpoint + 'song',{query: queryStr}).pipe(
      map(this.extractData),
      catchError(this.handleError<any>())
    );
  }

  getSong(id: string): Observable<Song> {
    return this.http.get<Song>(this.endpoint + 'song/'+id).pipe(
      catchError(this.handleError<Song>())
    );
  }

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
