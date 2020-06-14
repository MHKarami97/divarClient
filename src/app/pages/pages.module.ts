import { AddModule } from './add/add.module';
import { MainModule } from './main/main.module';
import { MoreModule } from './more/more.module';
import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    HomeModule,
    MoreModule,
    AuthModule,
    MainModule,
    AddModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
