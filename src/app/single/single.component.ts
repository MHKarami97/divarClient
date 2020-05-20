import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'theme-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {

  loading = false;
  error = null;

  constructor(private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('');
  }

  loadData() {

  }
}
