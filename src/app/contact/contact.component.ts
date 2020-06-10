import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-theme-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor(public translate: TranslateService, private title: Title) {
    this.title.setTitle('تماس با ما');
  }

  ngOnInit(): void {

  }
}
