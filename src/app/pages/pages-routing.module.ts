import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../auth-guard.service';
import { MoreComponent } from './more/more.component';
import { AddComponent } from './add/add.component';

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
    {
      path: 'add',
      component: AddComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module')
        .then(m => m.AuthModule),
    },
    {
      path: 'main',
      loadChildren: () => import('./main/main.module')
        .then(m => m.MainModule),
    },
    {
      path: '**',
      redirectTo: '/pages/home',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
