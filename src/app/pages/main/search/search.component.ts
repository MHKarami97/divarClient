import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ErrorToast } from 'src/app/errorToast';
import { PostShort } from 'src/app/models/post/post.module';
import { PostImage } from 'src/app/models/post/image.module';
import { PostService } from 'src/app/services/post.service';
import { Setting } from 'src/app/setting';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  loading = false;
  error = null;
  page: number = 1;
  source: PostShort[] = [];
  tempImg = new PostImage();
  @Input() str: string;

  constructor(private title: Title, public route: ActivatedRoute,
    private errorToast: ErrorToast, private dataService: PostService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.title.setTitle('نتیجه جستجو برای تبلیغ');

    this.tempImg.image = '/assets/img/default.png';

    this.str = this.route.snapshot.paramMap.get('str');

    this.loading = true;
    this.dataService.search(this.str, this.page).subscribe(
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

  loadMore() {
    this.loading = true;
    this.page += 1;

    this.dataService.search(this.str, this.page).subscribe(
      results => {
        if (results.isSuccess && results.data.length > 0) {
          results.data.forEach(a => a.images.length !== 0 ? a.images
            .forEach(b => b.image = Setting.baseFileUrl + b.image) : a.images.push(this.tempImg));

          this.source = this.source.concat(results.data);
        }
        else if (results.data.length == 0) {
          this.toastr.warning('اطلاعات دیگری موجود نمی باشد');
        }
        else {
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
