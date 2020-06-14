import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizeService } from './services/other/authorize.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authorizeService: AuthorizeService, private router: Router) {
  }

  canActivate() {
    const status = this.authorizeService.isAuthorize();

    if (status) {
      return true;
    } else {
      this.router.navigate(['/pages/auth/login']);
    }
  }
}
