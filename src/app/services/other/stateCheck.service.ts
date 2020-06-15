import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateCheckService {

  storeState(id: string): void {
    localStorage.removeItem('state');
    localStorage.removeItem('stateSub');

    localStorage.setItem('state', id);
  }

  storeSubState(id: string): void {
    localStorage.removeItem('state');
    localStorage.removeItem('stateSub');

    localStorage.setItem('stateSub', id);
  }

  getState(): string {
    if (this.isStateValid()) {
      return localStorage.getItem('state');
    }

    return null;
  }

  getSubState(): string {
    if (this.isSubStateValid()) {
      return localStorage.getItem('stateSub');
    }

    return null;
  }

  isStateValid(): boolean {
    const token = localStorage.getItem('state');

    if (token !== null) {
      return true;
    }

    return false;
  }

  isSubStateValid(): boolean {
    const token = localStorage.getItem('stateSub');

    if (token !== null) {
      return true;
    }

    return false;
  }

  removeSate(): void {
    localStorage.removeItem('state');
    localStorage.removeItem('stateSub');
  }
}
