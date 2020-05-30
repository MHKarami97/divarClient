import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Api } from '../models/base/api.model';
import { CategoryWithSyb } from 'src/models/category/category.module';

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

  getCategoryWithSub(): Observable<Api<CategoryWithSyb[]>> {
    return this.http.get<Api<CategoryWithSyb[]>>(this.apiUrl + 'getCategoryWithSub')
      .pipe(
        tap(),
        catchError(this.handleError('get', new Api<CategoryWithSyb[]>()),
        ));
  }
}
