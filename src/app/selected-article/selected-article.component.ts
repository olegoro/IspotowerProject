import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-selected-article',
  templateUrl: './selected-article.component.html',
  styleUrls: ['./selected-article.component.css'],
})
export class SelectedArticleComponent implements OnInit {
  article: { header: string; subHeader: string; article: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.article = {
      header: this.route.snapshot.params['header'],
      subHeader: this.route.snapshot.params['subHeader'],
      article: this.route.snapshot.params['article'],
    };

    this.route.params.subscribe((params: Params) => {
      this.article.header = params['header'];
      this.article.subHeader = params['subHeader'];
      this.article.article = params['article'];
    });
  }
}
