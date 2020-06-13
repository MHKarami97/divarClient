import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <div class="page home-page">
    <app-header></app-header>
    <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
})
export class PagesComponent {

}
