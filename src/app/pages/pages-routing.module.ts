import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../auth-guard.service';
import { MoreComponent } from './more/more.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'more/:id',
      component: MoreComponent,
    },
    // {
    //   path: 'find/:str',
    //   component: FindComponent,
    // },
    // {
    //   path: 'cat/:id',
    //   component: CatComponent,
    // },
    // {
    //   path: 'login',
    //   component: LoginComponent,
    // },
    // {
    //   path: 'signup',
    //   component: SignupComponent,
    // },
    // {
    //   path: 'message/:id',
    //   component: MessageComponent,
    // },
    // {
    //   path: 'contact',
    //   component: ContactComponent,
    // },
    // {
    //   path: 'about',
    //   component: AboutComponent,
    // },
    // {
    //   path: 'add',
    //   component: AddComponent,
    //   canActivate: [AuthGuard],
    // },
    {
      path: '**',
      component: ErrorComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
