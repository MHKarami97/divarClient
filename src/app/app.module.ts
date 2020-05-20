import { SearchComponent } from './search/search.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GotopComponent } from './gotop/gotop.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CategoryComponent,
    FooterComponent,
    GotopComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    MenuComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
