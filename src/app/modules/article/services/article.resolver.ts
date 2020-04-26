import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Article } from './article.model';
import { Observable } from 'rxjs';
import { ArticleService } from './article.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesResolver implements Resolve<Article> {

  constructor(private _articleService: ArticleService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Article | Observable<Article> | Promise<Article> {
    return this._articleService.getArticles();
  }
}
