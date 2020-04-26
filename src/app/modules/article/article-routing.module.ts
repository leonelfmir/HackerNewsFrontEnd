import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPageSmartComponent } from './news-page/news-page-smart.component';
import { ArticlesResolver } from './services/article.resolver';


const routes: Routes = [
  {
    path: '',
    component: NewsPageSmartComponent,
    resolve: {
      articles: ArticlesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
