import { Router } from '@angular/router';
import { AuthorizeService } from './../../services/other/authorize.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StateWithSub } from 'src/models/state/state.module';
import { StateService } from 'src/services/state.service';

@Component({
  selector: 'app-theme-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  loading = false;
  error = null;

  isAuth = false;
  isShow = true;
  email: string = null;
  states: StateWithSub[] = null;

  constructor(private router: Router, public translate: TranslateService, private authorizeService: AuthorizeService,
    private dataStateService: StateService) {
    translate.addLangs(['en', 'fa']);

  }

  ngOnInit(): void {
    if (this.authorizeService.isAuthorize()) {
      this.isAuth = true;
      this.email = 'hello';
    }

    this.dataStateService.getStateWithSub().subscribe(
      results => {
        this.states = results.data;
        this.loading = false;
      },
      error => {
        this.error = error.message;
        this.onError();
      },
    );

    // if (this.router.url === '/' || this.router.url.includes('page')) {
    //   this.isShow = true;
    // }
  }

  onError() {
    console.log(this.error);
  }
}
