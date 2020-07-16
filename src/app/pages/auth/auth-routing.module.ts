import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { ControllComponent } from './controll/controll.component';
import { AuthGuard } from 'src/app/auth-guard.service';
import { SingleComponent } from './controll/single/single.component';
import { ChatComponent } from './chat/chat.component';
import { ChatStartComponent } from './chat/start/start.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'controll',
        canActivate: [AuthGuard],
        component: ControllComponent,
      },
      {
        path: 'favorite',
        canActivate: [AuthGuard],
        component: FavoriteComponent,
      },
      {
        path: 'chat',
        canActivate: [AuthGuard],
        component: ChatComponent,
      },
      {
        path: 'single/:id/:str',
        canActivate: [AuthGuard],
        component: SingleComponent,
      },
      {
        path: 'chat/start/:id',
        canActivate: [AuthGuard],
        component: ChatStartComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthRoutingModule {
}

