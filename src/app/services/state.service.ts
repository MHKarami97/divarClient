import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Api } from '../models/base/api.model';
import { StateWithSub, State } from '../models/state/state.module';

@Injectable({
  providedIn: 'root',
})
export class StateService {

  apiUrl = 'states/';
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      this.error.next(error.message);
      return throwError(error);
    };
  }

  getStateWithSub(): Observable<Api<StateWithSub[]>> {
    return this.http.get<Api<StateWithSub[]>>(this.apiUrl + 'getStateWithSub')
      .pipe(
        tap(),
        catchError(this.handleError('getStateWithSub', new Api<StateWithSub[]>()),
        ));
  }

  getSubState(): Observable<Api<State[]>> {
    return this.http.get<Api<State[]>>(this.apiUrl + 'getSubState')
      .pipe(
        tap(),
        catchError(this.handleError('getSubState', new Api<State[]>()),
        ));
  }

  getMainState(): Observable<Api<State[]>> {
    return this.http.get<Api<State[]>>(this.apiUrl + 'getAllMainState')
      .pipe(
        tap(),
        catchError(this.handleError('getAllMainState', new Api<State[]>()),
        ));
  }
}
