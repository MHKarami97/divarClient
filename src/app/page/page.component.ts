import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  loading = false;
  error = null;

  ngOnInit(): void {

  }

  loadData() {

  }
}
