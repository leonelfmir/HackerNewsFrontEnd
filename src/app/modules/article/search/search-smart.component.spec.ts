import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSmartComponent } from './search-smart.component';
import { ArticleService } from '../services/article.service';

describe('SearchSmartComponent', () => {
  let component: SearchSmartComponent;
  let fixture: ComponentFixture<SearchSmartComponent>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ArticleService', ['filterArticles']);

    TestBed.configureTestingModule({
      declarations: [ SearchSmartComponent ],
      providers: [ {provide: ArticleService, useValue: spy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
