import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article/article.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsPageSmartComponent } from './news-page/news-page-smart.component';



@NgModule({
  declarations: [ArticleComponent, NewsPageComponent, NewsPageSmartComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
