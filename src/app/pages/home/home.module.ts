import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
  ],
})
export class HomeModule { }
