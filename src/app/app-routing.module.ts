import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { ProfileComponent } from './profile/profile.component';
import { AddComponent } from './add/add.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';


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
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'add',
    component: AddComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
