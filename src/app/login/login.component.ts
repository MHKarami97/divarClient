import { AuthorizeService } from './../../services/other/authorize.service';
import { UserLogin, UserLoginResult } from './../../models/user/user.module';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/services/user.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-theme-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loading = false;
  error = null;
  result: UserLoginResult = null;
  submitted = false;
  user: UserLogin = { email: null, password: null };

  constructor(public translate: TranslateService, private title: Title,
    private dataService: UserService, private authorizeService: AuthorizeService) {
    translate.addLangs(['en', 'fa']);
    this.title.setTitle('ورود');
  }

  ngOnInit(): void {

  }

  onAdd(): void {
    this.submitted = true;
    this.loading = true;
    this.dataService.login(this.user).subscribe(
      results => {
        if (results.isSuccess) {
          this.result = results.data;
          this.auth(results.data.access_token);
          this.loading = false;
        } else {
          this.error = results.message;
        }
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

  private auth(token: string) {
    this.authorizeService.authorizeUser(token);
  }

}
