import { Router } from '@angular/router';
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
  isShow = true;
  email: string = null;
  constructor(private router: Router, public translate: TranslateService, private authorizeService: AuthorizeService) {
    translate.addLangs(['en', 'fa']);

  }

  ngOnInit(): void {
    if (this.authorizeService.isAuthorize()) {
      this.isAuth = true;
      this.email = 'hello';
    }

    // if (this.router.url === '/' || this.router.url.includes('page')) {
    //   this.isShow = true;
    // }
  }
}
