import { MoreComponent } from './more.component';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY'
    }),
  ],
  declarations: [
    MoreComponent
  ],
  providers: [
  ],
})
export class MoreModule { }
