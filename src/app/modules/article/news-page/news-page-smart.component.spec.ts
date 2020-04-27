import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPageSmartComponent } from './news-page-smart.component';
import { ArticleService } from '../services/article.service';
import { of } from 'rxjs';
import { Article } from '../services/article.model';
import { MatPaginator } from '@angular/material/paginator';

describe('NewsPageSmartComponent', () => {
  let component: NewsPageSmartComponent;
  let fixture: ComponentFixture<NewsPageSmartComponent>;

  beforeEach(async(() => {
    var stubArticle: Article[] = [{
      author: 'auhtor',
      title: 'title',
      time: new Date(),
      url: 'url.com'
    }];
    
    const spyService = jasmine.createSpyObj('ArticleService', ['getArticlesFiltered']);
    const getArticlesFilteredSpy = spyService.getArticlesFiltered.and.returnValue(of(stubArticle));

    TestBed.configureTestingModule({
      declarations: [NewsPageSmartComponent, MatPaginator],
      providers: [{ provide: ArticleService, useValue: spyService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPageSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
