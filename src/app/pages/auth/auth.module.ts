import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    TranslateModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
})
export class AuthModule { }
