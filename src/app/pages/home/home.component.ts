import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { PostShort } from 'src/app/models/post/post.module';
import { PostService } from 'src/app/services/post.service';
import { PostImage } from 'src/app/models/post/image.module';
import { Setting } from 'src/app/setting';
import { ErrorToast } from 'src/app/errorToast';
import { StateCheckService } from 'src/app/services/other/stateCheck.service';
import { FavoriteCreate } from 'src/app/models/favorite/favorite.module';
import { FavoriteService } from 'src/app/services/favorite.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  loading = false;
  error = null;
  isData = false;
  page: number = 1;
  witch: number = 1;
  stateId: string;
  source: PostShort[] = [];
  tempImg = new PostImage();

  constructor(private meta: Meta, private dataService: PostService, private favoriteService: FavoriteService, private stateCheckService: StateCheckService,
    private errorToast: ErrorToast, private toastr: ToastrService) { }

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

    if (this.stateCheckService.isStateValid()) {
      this.witch = 2;
      this.stateId = this.stateCheckService.getState();

      this.dataService.getByStateId(+this.stateId, this.page).subscribe(
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
    } else if (this.stateCheckService.isSubStateValid()) {
      this.witch = 3;
      this.stateId = this.stateCheckService.getSubState();

      this.dataService.getBySubStateId(+this.stateId, this.page).subscribe(
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
    } else {
      this.witch = 1;
      this.dataService.getShort(this.page).subscribe(
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

  addFavorite(id: number) {
    this.loading = true;

    let input = new FavoriteCreate();
    input.id = 0;
    input.postId = id;

    this.favoriteService.create(input).subscribe(
      results => {
        if (results.isSuccess) {
          this.toastr.success('عملیات با موفقیت انجام شد', 'هورا');
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

    switch (this.witch) {
      case 1:
        this.dataService.getShort(this.page).subscribe(
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
        break;

      case 2:
        this.dataService.getByStateId(+this.stateId, this.page).subscribe(
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
        break;

      case 3:
        this.dataService.getBySubStateId(+this.stateId, this.page).subscribe(
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
        break;
    }

    this.dataService.getShort(this.page).subscribe(
      results => {
        if (results.isSuccess && results.data.length > 0) {
          results.data.forEach(a => a.images.length !== 0 ? a.images
            .forEach(b => b.image = Setting.baseFileUrl + b.image) : a.images.push(this.tempImg));

          this.source = this.source.concat(results.data);
        }
        else if (results.data.length == 0) {
          this.toastr.warning('اطلاعات دگیری موجود نمی باشد', 'چی شده؟!!');
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
