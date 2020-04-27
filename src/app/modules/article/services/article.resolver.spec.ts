import { TestBed } from '@angular/core/testing';

import { ArticlesResolver } from './article.resolver';
import { ArticleService } from './article.service';

describe('ArticlesResolver', () => {
  let resolver: ArticlesResolver;
  let articleServiceSpy: jasmine.SpyObj<ArticleService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ArticleService', ['getArticles']);

    TestBed.configureTestingModule({
      providers: [
        {provide: ArticleService, useValue: spy}
      ]
    });
    resolver = TestBed.inject(ArticlesResolver);
    articleServiceSpy = TestBed.inject(ArticleService) as jasmine.SpyObj<ArticleService>;
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
