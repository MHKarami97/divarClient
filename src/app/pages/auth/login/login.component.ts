import { Component, OnInit } from '@angular/core';
import { UserLoginResult, UserLogin } from 'src/app/models/user/user.module';
import { Title } from '@angular/platform-browser';
import { AuthorizeService } from 'src/app/services/other/authorize.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ErrorToast } from 'src/app/errorToast';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loading = false;
  error = null;
  result: UserLoginResult = null;
  submitted = false;
  user: UserLogin = { email: null, password: null };

  constructor(private title: Title,
    private dataService: UserService, private authorizeService: AuthorizeService,
    private router: Router, private errorToast: ErrorToast, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.title.setTitle('ورود');
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

          this.toastr.success('با موفقیت وارد شدید', 'هورا', {
            timeOut: 2000
          });

          setTimeout(() => {
            this.router.navigate(['/pages/home']);
            window.location.reload();
          }, 2000);

          this.router.navigate(['']);
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

  private auth(token: string) {
    this.authorizeService.authorizeUser(token);
  }
}
