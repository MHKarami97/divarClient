import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-theme-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {

  loading = false;
  error = null;

  constructor(private title: Title, public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
  }

  ngOnInit(): void {
    this.title.setTitle('');
  }

  loadData() {

  }
}
