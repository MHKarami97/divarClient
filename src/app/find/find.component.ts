import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { PostShort } from 'src/models/post/post.module';
import { Image } from './../../models/post/image.module';
import { Setting } from '../setting';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-theme-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss'],
})
export class FindComponent implements OnInit {

  loading = false;
  error = null;
  source: PostShort[] = null;
  tempImg = new Image();
  @Input() str: string;

  constructor(public route: ActivatedRoute, private title: Title, private dataService: PostService) {

  }

  ngOnInit(): void {
    this.title.setTitle('نام سایت' + ' | ' + 'جستجو');
    this.tempImg.image = '/assets/images/default.png';

    this.str = this.route.snapshot.paramMap.get('str');

    this.loading = true;
    this.dataService.search(this.str).subscribe(
      results => {
        this.source = results.data;

        this.source.forEach(a => a.images.length !== 0 ? a.images
          .forEach(b => b.image = Setting.baseFileUrl + b.image) : a.images.push(this.tempImg));

        this.loading = false;
      },
      error => {
        this.error = error.message;
        this.onError();
      },
    );
    this.loading = false;
  }

  loadData() {

  }

  onClick() {

  }

  onError() {
    console.log(this.error);
  }
}
