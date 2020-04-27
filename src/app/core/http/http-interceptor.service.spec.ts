import { TestBed } from '@angular/core/testing';

import { HttpInterceptorService } from './http-interceptor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('HttpInterceptorService', () => {
  let service: HttpInterceptorService;
  let matSnackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [
        {provide: MatSnackBar, useValue: spy}
      ]
    });
    service = TestBed.inject(HttpInterceptorService);
    matSnackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
