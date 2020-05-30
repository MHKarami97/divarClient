import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Title } from '@angular/platform-browser';
import { Post } from 'src/models/post/post.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-theme-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  loading = false;
  error = null;
  source: Post = null;
  @Input() id: string;

  constructor(public route: ActivatedRoute, private title: Title, private dataService: PostService) {
  }

  ngOnInit(): void {
    this.title.setTitle('نام سایت' + ' | ' + 'تبلیغ');

    this.id = this.route.snapshot.paramMap.get('id');

    this.loading = true;
    this.dataService.getById(+this.id).subscribe(
      results => {
        this.source = results.data;
        this.loading = false;
        console.log(results);
        console.log(this.source);
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
