import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from '../article/article';
import { ArticlesServiceService } from '../articles-service.service';

@Component({
  selector: 'app-selected-article',
  templateUrl: './selected-article.component.html',
  styleUrls: ['./selected-article.component.css'],
})
export class SelectedArticleComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesServiceService
  ) {}

  ngOnInit(): void {
    this.article = this.articlesService.getArticle(
      this.route.snapshot.params['id']
    );

    this.route.params.subscribe((params: Params) => {
      this.article = this.articlesService.getArticle(params['id']);
    });
  }
}
