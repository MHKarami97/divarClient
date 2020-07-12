import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-law',
  templateUrl: './law.component.html',
  styleUrls: ['./law.component.scss'],
})
export class LawComponent implements OnInit {

  loading = false;
  error = null;
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('قوانین');
  }
}
