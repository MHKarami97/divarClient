import { AuthorizeService } from './../../services/other/authorize.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-theme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isAuth = false;
  email: string = null;
  constructor(public translate: TranslateService, private authorizeService: AuthorizeService) {
    translate.addLangs(['en', 'fa']);

  }

  ngOnInit(): void {
    if (this.authorizeService.isAuthorize()) {
      this.isAuth = true;
      this.email = 'hello';
    }
  }
}
