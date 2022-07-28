import { Component, OnInit } from "@angular/core";
import { ArticlesServiceService } from "src/app/articles-service.service";
import { Article } from "../article";

@Component({
  selector: "app-article-upper-container",
  templateUrl: "./article-upper-container.component.html",
  styleUrls: ["./article-upper-container.component.css"],
})
export class ArticleUpperContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
