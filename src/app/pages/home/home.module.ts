import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
  ],
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  providers: [
  ],
})
export class HomeModule { }
