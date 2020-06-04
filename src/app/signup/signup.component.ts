import { User, UserCreate } from './../../models/user/user.module';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/services/user.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-theme-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  loading = false;
  error = null;
  result: User = null;
  submitted = false;
  user: UserCreate = { email: null, password: null, passwordVerify: null };

  constructor(public translate: TranslateService, private title: Title, private dataService: UserService,
    private router: Router) {
    translate.addLangs(['en', 'fa']);
    this.title.setTitle('عضویت');
  }

  ngOnInit(): void {

  }

  onAdd(): void {
    this.submitted = true;
    this.loading = true;
    this.dataService.create(this.user).subscribe(
      results => {
        this.result = results.data;
        this.loading = false;

        if (results.isSuccess) {
          this.router.navigate(['/login']);
        } else {
          this.error == results.message;
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

}
