import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Title } from '@angular/platform-browser';
import { Post } from 'src/models/post/post.module';
import { ActivatedRoute } from '@angular/router';
import { Image } from './../../models/post/image.module';
import { Setting } from '../setting';

@Component({
  selector: 'app-theme-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  loading = false;
  error = null;
  source: Post = null;
  tempImg = new Image();
  @Input() id: string;

  constructor(public route: ActivatedRoute, private title: Title, private dataService: PostService) {
  }

  ngOnInit(): void {
    this.title.setTitle('نام سایت' + ' | ' + 'تبلیغ');
    this.tempImg.image = '/assets/images/default.png';

    this.id = this.route.snapshot.paramMap.get('id');

    this.loading = true;
    this.dataService.getById(+this.id).subscribe(
      results => {
        this.source = results.data;

        this.source.images.length !== 0 ? this.source.images
          .forEach(b => b.image = Setting.baseFileUrl + b.image) : this.source.images.push(this.tempImg);

        this.loading = false;

        if (document.getElementById('main.js') != null) {
          document.getElementById('main.js').remove();
        }
        const node = document.createElement('script');
        node.src = '/assets/js/' + 'main.js';
        node.id = 'main.js';
        node.async = false;
        node.type = 'text/javascript';
        document.getElementsByTagName('body')[0].appendChild(node);

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
