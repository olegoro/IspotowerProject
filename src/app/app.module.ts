import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ZipCodeComponent } from './zip-code/zip-code.component';
import { DropdownDirective } from './dropdown.directive';
import { SelectedArticleComponent } from './selected-article/selected-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ZipCodeComponent,
    DropdownDirective,
    SelectedArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
