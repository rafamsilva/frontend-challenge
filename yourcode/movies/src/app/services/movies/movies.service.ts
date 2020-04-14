import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  readonly API_URL = 'http://www.omdbapi.com/?apikey=f32472d7';
  constructor(private http: HttpClient) { }

  search(params: any): Observable<any> {
    return this.http.get(`${this.API_URL}`, { params }).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  findId(params: any): Observable<any> {
    return this.http.get(`${this.API_URL}`, { params }).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  protected extractData(res) {
    const body = res || '';
    return body;
  }

  protected handleError(error: Response | any) {
    let msg: any;
    if (error instanceof Response) {
      msg = error.json() || '';
    } else {
      msg = error.message ? error.message : error.toString();
    }
    return throwError(msg);
  }

}
