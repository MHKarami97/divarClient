import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ControllComponent } from './controll/controll.component';
import { SingleComponent } from './controll/single/single.component';
import { AgmCoreModule } from '@agm/core';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    TranslateModule,
    AuthRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY'
    }),
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ControllComponent,
    SingleComponent,
    ChatComponent,
  ],
})
export class AuthModule { }
