import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { PostShort } from 'src/models/post/post.module';
import { Image } from './../../models/post/image.module';
import { Setting } from '../setting';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-theme-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit {

  loading = false;
  error = null;
  source: PostShort[] = null;
  tempImg = new Image();
  @Input() id: string;

  constructor(public route: ActivatedRoute, private title: Title, private dataService: PostService) {

  }

  ngOnInit(): void {
    this.title.setTitle('نام سایت' + ' | ' + 'دسته بندی');
    this.tempImg.image = '/assets/images/default.png';

    this.id = this.route.snapshot.paramMap.get('id');

    this.loading = true;
    this.dataService.getAllByCatId(+this.id).subscribe(
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
