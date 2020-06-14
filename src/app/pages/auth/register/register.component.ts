import { Component, OnInit } from '@angular/core';
import { UserLoginResult, UserCreate, User } from 'src/app/models/user/user.module';
import { Title } from '@angular/platform-browser';
import { AuthorizeService } from 'src/app/services/other/authorize.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ErrorToast } from 'src/app/errorToast';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  loading = false;
  error = null;
  result: User = null;
  submitted = false;
  user: UserCreate = { email: null, password: null, passwordVerify: null };

  constructor(private title: Title,
    private dataService: UserService, private authorizeService: AuthorizeService,
    private router: Router, private errorToast: ErrorToast, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.title.setTitle('عضویت');
  }

  onAdd(): void {

    if (this.user.password === this.user.passwordVerify) {
      this.submitted = true;

      this.loading = true;
      this.dataService.create(this.user).subscribe(
        results => {
          if (results.isSuccess) {
            this.result = results.data;
            this.loading = false;

            this.toastr.success('با موفقیت عضو شدید', 'هورا', {
              timeOut: 2000
            });

            setTimeout(() => {
              this.router.navigate(['/pages/auth/login']);
            }, 2000);

            this.router.navigate(['']);
          } else {
            this.submitted = false;

            if (results.message.includes('password')) {
              this.errorToast.showSuccess('رمز عبور وارد شده کوتاه است، رمز باید شامل حروف بزرگ و کوچک، عدد و کاراکتر باشد');
            } else {
              this.errorToast.showSuccess(results.message);
            }
          }

          this.loading = false;
        },
        error => {
          this.loading = false;
          this.submitted = false;
          this.error = error.message;
          this.errorToast.showSuccess(error.message);
        },
      );
    } else {
      this.errorToast.showSuccess('رمز عبور و تایید آن برابر نمی باشند');
    }
  }

  private auth(token: string) {
    this.authorizeService.authorizeUser(token);
  }
}
