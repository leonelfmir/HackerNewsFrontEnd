import { Component, OnInit } from '@angular/core';
import { Article } from '../services/article.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-page-smart',
  templateUrl: './news-page-smart.component.html',
  styleUrls: ['./news-page-smart.component.scss']
})
export class NewsPageSmartComponent implements OnInit {
  articles: Article[];

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.data.subscribe(({ articles }) => {
      this.articles = articles;
    })
  }

  ngOnInit(): void {
  }

}
