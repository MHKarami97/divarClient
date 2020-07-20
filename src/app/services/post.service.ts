import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Api } from '../models/base/api.model';
import { PostShort, Post, PostSelectEdit, PostCreate } from '../models/post/post.module';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  apiUrl = 'posts/';
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

  getByIdForEdit(id: number): Observable<Api<PostSelectEdit>> {
    const url = `${this.apiUrl}get/${id}`;
    return this.http.get<Api<PostSelectEdit>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<PostSelectEdit>>(`getByIdForEdit id=${id}`)),
    );
  }

  deActive(id: number): Observable<Api<Post>> {
    const url = `${this.apiUrl}deActive/${id}`;
    return this.http.get<Api<Post>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<Post>>(`deactive id=${id}`)),
    );
  }

  getByStateId(id: number): Observable<Api<PostShort[]>> {
    const url = `${this.apiUrl}getByStateId/${id}`;
    return this.http.get<Api<PostShort[]>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<PostShort[]>>(`getByStateId id=${id}`)),
    );
  }

  getUserPosts(): Observable<Api<PostShort[]>> {
    const url = `${this.apiUrl}getUserPosts`;
    return this.http.get<Api<PostShort[]>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<PostShort[]>>(`getUserPosts`)),
    );
  }

  getBySubStateId(id: number): Observable<Api<PostShort[]>> {
    const url = `${this.apiUrl}getBySubStateId/${id}`;
    return this.http.get<Api<PostShort[]>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<PostShort[]>>(`getBySubStateId id=${id}`)),
    );
  }

  create(product: FormData): Observable<Api<Post>> {
    return this.http.post<Api<Post>>(this.apiUrl + 'create', product).pipe(
      tap(),
      catchError(this.handleError('get', new Api<Post>()),
      ));
  }

  update(id: number, product: PostCreate): Observable<Api<Post>> {
    const url = `${this.apiUrl}update/${id}`;
    return this.http.put<Api<Post>>(url, product).pipe(
      tap(),
      catchError(this.handleError<Api<Post>>('update')),
    );
  }

  search(str: string): Observable<Api<PostShort[]>> {
    const url = `${this.apiUrl}search?str=${str}`;
    return this.http.get<Api<PostShort[]>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<PostShort[]>>(`search str=${str}`)),
    );
  }

  getAllByCatId(id: number): Observable<Api<PostShort[]>> {
    const url = `${this.apiUrl}GetAllByCatId/${id}`;
    return this.http.get<Api<PostShort[]>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<PostShort[]>>(`GetAllByCatId id=${id}`)),
    );
  }
}
