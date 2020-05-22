import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-theme-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
  }
}
