import { Observable, throwError, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Api } from '../models/base/api.model';
import { PostShort, Post } from '../models/post/post.module';
import { ChatShort, Chat, ChatCreate, ChatPost } from '../models/chat/chat.module';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  apiUrl = 'comments/';
  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // console.error(error);
      this.error.next(error.message);
      return throwError(error);
    };
  }

  getByUser(): Observable<Api<ChatShort[]>> {
    return this.http.get<Api<ChatShort[]>>(this.apiUrl + 'getByUser')
      .pipe(
        tap(),
        catchError(this.handleError('get', new Api<ChatShort[]>()),
        ));
  }

  getByPost(id: number, creatorId: number): Observable<Api<ChatPost>> {
    const url = `${this.apiUrl}getByPost/${id}?creatorId=${creatorId}`;
    return this.http.get<Api<ChatPost>>(url).pipe(
      tap(),
      catchError(this.handleError<Api<ChatPost>>(`getByPost id=${id}`)),
    );
  }

  create(item: ChatCreate): Observable<Api<Chat>> {
    return this.http.post<Api<Chat>>(this.apiUrl + 'create', item).pipe(
      tap(),
      catchError(this.handleError('get', new Api<Chat>()),
      ));
  }
}
