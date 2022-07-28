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
    // this.article = {
    // header: this.route.snapshot.params['header'],
    // subHeader: this.route.snapshot.params['subHeader'],
    // article: this.route.snapshot.params['article'],
    // id: this.articlesService.getArticle(this.route.snapshot.params['id'])
    // };

    this.article = this.articlesService.getArticle(
      this.route.snapshot.params['id']
    );

    this.route.params.subscribe((params: Params) => {
      // this.article.header = params['header'];
      // this.article.subHeader = params['subHeader'];
      // this.article.article = params['article'];
      this.article = this.articlesService.getArticle(params['id']);
    });
  }
}
