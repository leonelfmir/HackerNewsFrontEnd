import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-search-smart',
  templateUrl: './search-smart.component.html',
  styleUrls: ['./search-smart.component.scss']
})
export class SearchSmartComponent implements OnInit {

  constructor(private _articleService: ArticleService) { }

  ngOnInit(): void {
  }

  searchChange(searchText: string) {
    this._articleService.filterArticles(searchText);
  }

}
