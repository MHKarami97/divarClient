import { PostShort } from './../../models/post/post.module';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-theme-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  loading = false;
  error = null;
  source: PostShort[] = [];

  constructor(public translate: TranslateService, private dataService: PostService) {
    translate.addLangs(['en', 'fa']);
  }

  ngOnInit(): void {
    this.loading = true;
    this.dataService.getShort().subscribe(
      results => {
        this.source = results.data;
        this.loading = false;
      },
      error => {
        this.error = error.message;
        this.onError();
      },
    );
    this.loading = false;
  }

  onError() {
    console.log(this.error);
  }

}
