import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  loading = false;
  error = null;
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('تماس با ما');
  }
}
