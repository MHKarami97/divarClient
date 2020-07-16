import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Setting } from 'src/app/setting';
import { Favorite } from 'src/app/models/favorite/favorite.module';
import { PostImage } from 'src/app/models/post/image.module';
import { ErrorToast } from 'src/app/errorToast';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  loading = false;
  error = null;
  isData = false;
  source: Favorite[] = [];
  tempImg = new PostImage();

  constructor(private title: Title, private dataService: FavoriteService, private errorToast: ErrorToast) {

  }

  ngOnInit(): void {
    this.title.setTitle('علاقه مندی های شما');

    this.tempImg.image = '/assets/img/default.png';

    this.loading = true;

    this.dataService.get().subscribe(
      results => {
        if (results.isSuccess) {
          this.source = results.data;
          console.log(this.source);
          this.source.forEach(a => a.postImages.length !== 0 ? a.postImages
            .forEach(b => b.image = Setting.baseFileUrl + b.image) : a.postImages.push(this.tempImg));
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
