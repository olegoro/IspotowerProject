import { Component, OnInit } from "@angular/core";
import { ArticlesServiceService } from "src/app/articles-service.service";
import { Article } from "../article";

@Component({
  selector: "app-article-container-articles",
  templateUrl: "./article-container-articles.component.html",
  styleUrls: ["./article-container-articles.component.css"],
})
export class ArticleContainerArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticlesServiceService) {}

  ngOnInit(): void {
    this.articles = this.articleService.articles;
  }
}
