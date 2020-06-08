import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { AddComponent } from './add/add.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MessageComponent } from './message/message.component';
import { FindComponent } from './find/find.component';
import { CatComponent } from './cat/cat.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'page/:id',
    component: PageComponent,
  },
  {
    path: 'find/:str',
    component: FindComponent,
  },
  {
    path: 'cat/:id',
    component: CatComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'message/:id',
    component: MessageComponent,
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AuthGuard],
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, config),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
