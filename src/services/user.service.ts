import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Api } from '../models/base/api.model';
import { Setting } from 'src/app/setting';
import { User, UserCreate, UserValidateCreate } from 'src/models/user/user.module';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  apiUrl = Setting.baseAddress + 'users/';
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      this.error.next(error.message);
      return throwError(error);
    };
  }

  getById(id: number): Observable<Api<User>> {
    const url = `${this.apiUrl}get/${id}`;
    return this.http.get<Api<User>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<User>>(`getById id=${id}`)),
    );
  }

  create(product: UserCreate): Observable<Api<User>> {
    return this.http.post<Api<User>>(this.apiUrl + 'create', product).pipe(
      tap(),
      catchError(this.handleError('get', new Api<User>()),
      ));
  }

  validate(product: UserValidateCreate): Observable<Api<User>> {
    return this.http.post<Api<User>>(this.apiUrl + 'create', product).pipe(
      tap(),
      catchError(this.handleError('get', new Api<User>()),
      ));
  }
}
