import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CategoryService } from 'src/services/category.service';
import { CategoryWithSub } from 'src/models/category/category.module';

@Component({
  selector: 'app-theme-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  loading = false;
  error = null;
  source: CategoryWithSub[] = [];

  constructor(public translate: TranslateService, private dataService: CategoryService) {
    translate.addLangs(['en', 'fa']);
  }

  ngOnInit(): void {
    this.loading = true;
    this.dataService.getCategoryWithSub().subscribe(
      results => {
        this.source = results.data;
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
