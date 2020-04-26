import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from './article.model';
import { tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly _articleBaseApi = `${environment.apiUrl}`;

  private _articlesObject = {
    requested: false,
    articles$: new BehaviorSubject<Article[]>(null)
  };

  constructor(private _httpClient: HttpClient) { }

  getArticles() {
    if (!this._articlesObject.requested) {
      this._articlesObject.requested = true;
      this._httpClient.get<Article[]>(this._articleBaseApi).pipe(
        tap(articles => this._articlesObject.articles$.next(articles)))
        .subscribe();
    }
    return this._articlesObject.articles$;
  }

  getArticlesFiltered(searchText: string = ""){
    return this._articlesObject.articles$.pipe(
      map(articles => articles.filter(art => art.title.includes(searchText)))
    );
  }
}
