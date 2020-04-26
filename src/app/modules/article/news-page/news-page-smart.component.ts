import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { Article } from '../services/article.model';
import { ArticleService } from '../services/article.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { tap, map, filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-news-page-smart',
  templateUrl: './news-page-smart.component.html',
  styleUrls: ['./news-page-smart.component.scss']
})
export class NewsPageSmartComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  articlesPaginated$: Observable<Article[]>;
  private _articles$: Observable<Article[]>;
  private _pageEvent$ = new BehaviorSubject<PageEvent>(null);

  constructor(private _articleService: ArticleService) {
  }

  ngOnInit(): void {
    this._articles$ = this._articleService.getArticlesFiltered().pipe(
      tap(articles => this.length = articles.length),
      tap(() => this.paginator.firstPage()));

    this.articlesPaginated$ = combineLatest(this._articles$, this._pageEvent$).pipe(
      map(([articles, pageEvent]) => {
        let startIndex = 0;
        let calculatedPageSize = this.pageSize;

        // getting pagination
        if (pageEvent !== null) {
          const { pageSize, pageIndex } = pageEvent;
          startIndex = pageSize * pageIndex;
          calculatedPageSize = pageSize;
        }
        return articles.slice(startIndex, startIndex + calculatedPageSize);
      })
    );
  }

  pageEvent(options: PageEvent) {
    this._pageEvent$.next(options);
  }

}
