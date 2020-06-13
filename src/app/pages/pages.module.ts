import { MoreModule } from './more/more.module';
import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    HomeModule,
    MoreModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
