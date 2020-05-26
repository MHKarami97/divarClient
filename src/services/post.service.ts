import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Api } from '../models/base/api.model';
import { PostShort, Post } from 'src/models/post/post.module';
import { Setting } from 'src/app/setting';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  apiUrl = Setting.baseAddress + 'posts/';
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      this.error.next(error.message);
      return throwError(error);
    };
  }

  getShort(): Observable<Api<PostShort[]>> {
    return this.http.get<Api<PostShort[]>>(this.apiUrl + 'getShort')
      .pipe(
        tap(),
        catchError(this.handleError('get', new Api<PostShort[]>()),
        ));
  }

  getById(id: number): Observable<Api<Post>> {
    const url = `${this.apiUrl}get/${id}`;
    return this.http.get<Api<Post>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<Post>>(`getById id=${id}`)),
    );
  }
}
