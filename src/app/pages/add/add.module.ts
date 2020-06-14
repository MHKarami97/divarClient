import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddComponent } from './add.component';
import { NgxSelectModule } from 'ngx-select-ex';
import { AgmCoreModule } from '@agm/core';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxSelectModule,
    FileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY'
    }),
  ],
  declarations: [
    AddComponent,
  ],
  providers: [
  ],
})
export class AddModule { }
