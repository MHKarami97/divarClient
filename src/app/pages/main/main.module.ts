import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    TranslateModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    SearchComponent,
    AboutComponent,
    ContactComponent,
    CategoryComponent
  ],
})
export class MainModule { }
