import { User, UserCreate } from './../../models/user/user.module';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from 'src/services/user.service';
@Component({
  selector: 'app-theme-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  loading = false;
  error = null;
  source: User = null;
  submitted = false;
  user: UserCreate = { phoneNumber: '' };

  constructor(public translate: TranslateService, private dataService: UserService) {
    translate.addLangs(['en', 'fa']);
  }

  ngOnInit(): void {

  }

  onAdd(): void {
    this.submitted = true;
    this.loading = true;
    this.dataService.create(this.user).subscribe(
      results => {
        this.source = results.data;
        this.loading = false;
        console.log(results);
        console.log(this.source);
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
