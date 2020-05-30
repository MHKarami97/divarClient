import { AddComponent } from './add/add.component';
import { ProfileComponent } from './profile/profile.component';
import { SingleComponent } from './single/single.component';
import { PageComponent } from './page/page.component';
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
import { HttpClientModule, HttpClient, HttpBackend, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AuthGuard } from './auth-guard.service';
import { HttpInterceptorService } from './http-interceptor.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function translateHttpLoaderFactory(httpBackend: HttpBackend): TranslateHttpLoader {
  return new TranslateHttpLoader(new HttpClient(httpBackend));
}

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
    SearchComponent,
    PageComponent,
    SingleComponent,
    ProfileComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fa',
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpBackend]
      }
    }),
    // TranslateModule.forRoot({
    //   defaultLanguage: 'fa',
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
