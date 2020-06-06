import { PostShort } from './../../models/post/post.module';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Setting } from '../setting';
import { Image } from './../../models/post/image.module';

@Component({
  selector: 'app-theme-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  loading = false;
  error = null;
  source: PostShort[] = [];
  tempImg = new Image();

  constructor(public translate: TranslateService, private dataService: PostService) {
    translate.addLangs(['en', 'fa']);
  }

  ngOnInit(): void {
    this.tempImg.image = '/assets/images/default.png';

    this.loading = true;
    this.dataService.getShort().subscribe(
      results => {
        this.source = results.data;
        console.log(results.data);
        this.source.forEach(a => a.images.length !== 0 ? a.images
          .forEach(b => b.image = Setting.baseFileUrl + b.image) : a.images.push(this.tempImg));
        console.log(this.source);
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
