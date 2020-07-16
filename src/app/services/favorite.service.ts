import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Api } from '../models/base/api.model';
import { Favorite, FavoriteCreate } from '../models/favorite/favorite.module';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {

  apiUrl = 'favorites/';
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      this.error.next(error.message);
      return throwError(error);
    };
  }

  get(): Observable<Api<Favorite[]>> {
    return this.http.get<Api<Favorite[]>>(this.apiUrl + 'get')
      .pipe(
        tap(),
        catchError(this.handleError('get', new Api<Favorite[]>()),
        ));
  }  

  create(product: FavoriteCreate): Observable<Api<Favorite>> {
    return this.http.post<Api<Favorite>>(this.apiUrl + 'create', product).pipe(
      tap(),
      catchError(this.handleError('get', new Api<Favorite>()),
      ));
  }

  delete(id: any): Observable<Api<Favorite>> {
    const url = `${this.apiUrl}delete/${id}`;
    return this.http.delete<Api<Favorite>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<Favorite>>('delete')),
    );
  }

}
