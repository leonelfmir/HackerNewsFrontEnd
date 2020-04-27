import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ArticleService } from './article.service';
import { Article } from './article.model';
import { environment } from 'src/environments/environment';

describe('ArticleService', () => {
  let httpTestingController: HttpTestingController;

  let service: ArticleService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Get Articles From Api', () => {
    const testData: Article[] = [
      {
        author: 'auhtor',
        title: 'title',
        time: new Date(),
        url: 'url.com'
      },
      {
        author: 'auhtor',
        title: 'title',
        time: new Date(),
        url: null
      }
    ];

    it('GetArticles should call the api once', () => {
      service.getArticles().subscribe(
        data => {
          expect(data).toEqual(testData);
        }
      );

      const req = httpTestingController.expectOne(environment.apiUrl);

      expect(req.request.method).toEqual('GET');

      req.flush(testData);
    });

    it('GetArticlesFiltered should return articles with url', () => {
      service.getArticles().subscribe(
        data => {
          expect(data).toEqual(testData);
        }
      );

      const req = httpTestingController.expectOne(environment.apiUrl);
      req.flush(testData);

      service.getArticlesFiltered().subscribe(
        data => {
          var dataHasNull = data.some(d => d.url === null);
          expect(dataHasNull).toEqual(false);
        }
      )

    });

    afterEach(() => {
      httpTestingController.verify()
    })

  });
});
