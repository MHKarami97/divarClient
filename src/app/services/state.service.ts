import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Api } from '../models/base/api.model';
import { StateWithSub } from '../models/state/state.module';

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
        catchError(this.handleError('get', new Api<StateWithSub[]>()),
        ));
  }
}
