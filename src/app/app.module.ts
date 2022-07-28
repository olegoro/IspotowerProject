import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ArticleComponent } from "./article/article.component";
import { ZipCodeComponent } from "./components/zip-code/zip-code.component";
import { DropdownDirective } from "./dropdown.directive";
import { SelectedArticleComponent } from "./selected-article/selected-article.component";
import { ArticleUpperContainerComponent } from "./article/article-upper-container/article-upper-container.component";
import { ArticleDropdownListComponent } from "./article/article-upper-container/article-dropdown-list/article-dropdown-list.component";
import { ArticleContainerArticlesComponent } from './article/article-container-articles/article-container-articles.component';
import { ArticleFooterContainerComponent } from './article/article-footer-container/article-footer-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ZipCodeComponent,
    DropdownDirective,
    SelectedArticleComponent,
    ArticleUpperContainerComponent,
    ArticleDropdownListComponent,
    ArticleContainerArticlesComponent,
    ArticleFooterContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
