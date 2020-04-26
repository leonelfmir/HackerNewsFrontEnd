import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../services/article.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  @Input() articles: Article[];

  constructor() { }

  ngOnInit(): void {
  }

}
