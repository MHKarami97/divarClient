import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-theme-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  loading = false;
  error = null;

  ngOnInit(): void {

  }

  loadData() {

  }
}
