import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article/article.component';
import { NewsPageSmartComponent } from './news-page/news-page-smart.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { SearchSmartComponent } from './search/search-smart.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [ArticleComponent, NewsPageComponent, NewsPageSmartComponent, SearchComponent, SearchSmartComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class ArticleModule { }
