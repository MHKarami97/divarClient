import { Injectable } from '@angular/core';
import { User } from 'src/models/user/user.module';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {

  authorizeUser(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    if (this.isAuthorize()) {
      return localStorage.getItem('token');
    }

    return null;
  }

  getUser(): User {
    if (this.isAuthorize()) {
      return JSON.parse(localStorage.getItem('user'));
    }

    return null;
  }

  storeUserData(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isAuthorize(): boolean {
    const token = localStorage.getItem('token');

    if (token !== null) {
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
