import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {

  addLang(lang: string): void {
    localStorage.setItem('lang', lang);
  }

  getlang(): string {
    if (this.isLang()) {
      return localStorage.getItem('lang');
    }

    return null;
  }

  isLang(): boolean {
    const token = localStorage.getItem('lang');

    if (token !== null) {
      return true;
    }

    return false;
  }

  remove(): void {
    localStorage.removeItem('lang');
  }
}
