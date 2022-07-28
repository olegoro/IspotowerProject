import { Component, OnInit } from '@angular/core';
import { ArticlesServiceService } from '../articles-service.service';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
