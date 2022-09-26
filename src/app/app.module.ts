import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CategoryCountryFormComponent} from './components/category-country-form/category-country-form.component';
import {NewsListComponent} from './components/news-list/news-list.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SpinnerComponent} from './animations/spinner/spinner.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CategoryCountryFormComponent,
    NewsListComponent,
    NavbarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
