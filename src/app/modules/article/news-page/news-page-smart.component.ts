import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../services/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-news-page-smart',
  templateUrl: './news-page-smart.component.html',
  styleUrls: ['./news-page-smart.component.scss']
})
export class NewsPageSmartComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private _articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articles$ = this._articleService.getArticlesFiltered();
  }

}
