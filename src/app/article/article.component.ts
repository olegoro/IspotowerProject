import { Component, OnInit } from '@angular/core';
import { ArticlesServiceService } from '../articles-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  basicsArticles: { header: string; subHeader: string; article: string }[] = [];
  typesOfCoverageArticles: {
    header: string;
    subHeader: string;
    article: string;
  }[] = [];
  tipsArticles: { header: string; subHeader: string; article: string }[] = [];
  stateLawsArticles: { header: string; subHeader: string; article: string }[] =
    [];

  constructor(private articleService: ArticlesServiceService) {}

  ngOnInit(): void {
    this.basicsArticles = this.articleService.basicsArticles;
    this.typesOfCoverageArticles = this.articleService.typesOfCoverageArticles;
    this.tipsArticles = this.articleService.tipsArticles;
    this.stateLawsArticles = this.articleService.stateLawsArticles;
  }
}
