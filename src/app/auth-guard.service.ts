import { AuthorizeService } from './../services/other/authorize.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authorizeService: AuthorizeService) {
  }

  canActivate() {
    return this.authorizeService.isAuthorize();
  }
}
