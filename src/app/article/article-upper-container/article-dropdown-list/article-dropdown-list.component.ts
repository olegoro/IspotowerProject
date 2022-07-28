import { Component, OnInit } from "@angular/core";
import { ArticlesServiceService } from "src/app/articles-service.service";
import { Article } from "../../article";

@Component({
  selector: "app-article-dropdown-list",
  templateUrl: "./article-dropdown-list.component.html",
  styleUrls: ["./article-dropdown-list.component.css"],
})
export class ArticleDropdownListComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticlesServiceService) {}

  ngOnInit(): void {
    this.articles = this.articleService.articles;
  }
}
