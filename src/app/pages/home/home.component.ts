import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { PostShort } from 'src/app/models/post/post.module';
import { PostService } from 'src/app/services/post.service';
import { PostImage } from 'src/app/models/post/image.module';
import { Setting } from 'src/app/setting';
import { ErrorToast } from 'src/app/errorToast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  loading = false;
  error = null;
  source: PostShort[] = [];
  tempImg = new PostImage();

  constructor(private meta: Meta, private dataService: PostService, private errorToast: ErrorToast) {

  }

  ngOnInit(): void {
    this.meta.addTags([
      { name: 'description', content: 'my site is here' },
      { name: 'author', content: 'mhkarami' },
      { name: 'keywords', content: 'Angular, cms, site, ' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'ALL' },
      { name: 'theme-color', content: '#b3e6ff' },
      { name: 'author', content: 'mhkarami' },
    ], true);

    this.tempImg.image = '/assets/img/default.png';

    this.loading = true;
    this.dataService.getShort().subscribe(
      results => {
        if (results.isSuccess) {
          this.source = results.data;
          this.source.forEach(a => a.images.length !== 0 ? a.images
            .forEach(b => b.image = Setting.baseFileUrl + b.image) : a.images.push(this.tempImg));

        } else {
          this.errorToast.showSuccess(results.message);
        }

        this.loading = false;
      },
      error => {
        this.loading = false;
        this.error = error.message;
        this.errorToast.showSuccess(error.message);
      },
    );
  }

}
