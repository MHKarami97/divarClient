import { MoreComponent } from './more.component';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
  ],
  declarations: [
    MoreComponent
  ],
  providers: [
  ],
})
export class MoreModule { }
