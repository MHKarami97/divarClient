import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { ControllComponent } from './controll/controll.component';
import { AuthGuard } from 'src/app/auth-guard.service';
import { SingleComponent } from './controll/single/single.component';

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
        path: 'single/:id/:str',
        canActivate: [AuthGuard],
        component: SingleComponent,
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

