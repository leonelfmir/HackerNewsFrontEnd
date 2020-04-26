import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPageSmartComponent } from './news-page-smart.component';

describe('NewsPageSmartComponent', () => {
  let component: NewsPageSmartComponent;
  let fixture: ComponentFixture<NewsPageSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPageSmartComponent ]
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
