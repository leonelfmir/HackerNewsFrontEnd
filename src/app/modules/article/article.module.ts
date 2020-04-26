import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article/article.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsPageSmartComponent } from './news-page/news-page-smart.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { SearchComponent } from './search/search.component';
import { SearchSmartComponent } from './search/search-smart.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

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
    MatIconModule
  ]
})
export class ArticleModule { }
