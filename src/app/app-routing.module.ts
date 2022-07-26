import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { SelectedArticleComponent } from './selected-article/selected-article.component';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  {
    path: 'article/:header/:subHeader/:article',
    component: SelectedArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
