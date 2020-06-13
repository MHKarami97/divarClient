import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Api } from '../models/base/api.model';
import { CategoryWithSub } from '../models/category/category.module';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  apiUrl = 'categories/';
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      this.error.next(error.message);
      return throwError(error);
    };
  }

  getCategoryWithSub(): Observable<Api<CategoryWithSub[]>> {
    return this.http.get<Api<CategoryWithSub[]>>(this.apiUrl + 'getCategoryWithSub')
      .pipe(
        tap(),
        catchError(this.handleError('get', new Api<CategoryWithSub[]>()),
        ));
  }
}
