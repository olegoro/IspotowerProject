import { Component, OnInit } from '@angular/core';
import { ArticlesServiceService } from '../articles-service.service';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  // articles: Article[] = [];

  constructor(/*private articleService: ArticlesServiceService*/) {}

  ngOnInit(): void {
    // this.articles = this.articleService.articles;
  }
}
