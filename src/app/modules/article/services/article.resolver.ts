import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Article } from './article.model';
import { Observable, of } from 'rxjs';
import { ArticleService } from './article.service';
import { take, filter, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesResolver implements Resolve<Article[]> {

  constructor(private _articleService: ArticleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Article[] | Observable<Article[]> | Promise<Article[]> {
    return this._articleService.getArticles().pipe(
      filter(a => a != null),
      take(1),
      catchError(() => {
        return of([]);
      })
    );
  }
}
