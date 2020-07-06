import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/banner/banner.module';
import { BannerService } from 'src/app/services/banner.service';
import { Setting } from 'src/app/setting';
import { ErrorToast } from 'src/app/errorToast';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {

  loading = false;
  error = null;
  source: Banner[] = [];

  constructor(private dataService: BannerService, private errorToast: ErrorToast) { }

  ngOnInit(): void {
    this.loading = true;
    this.dataService.get().subscribe(
      results => {
        if (results.isSuccess) {
          this.source = results.data;
          this.source.forEach(a => a.image = Setting.baseFileUrl + a.image);
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
